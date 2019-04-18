import React, {Component, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  TextInput,
} from 'react-native';
import Swipeable from 'react-native-swipeable';

const topics = [
  {name: 'Documentation', estimation: 0},
  {name: 'Localisation', estimation: 0},
  {name: 'Legality', estimation: 0},
  {name: 'Security', estimation: 0},
  {name: 'Integration to the current system', estimation: 0},
  {name: 'Implementation of the code', estimation: 0},
  {name: 'Exception management', estimation: 0},
  {name: 'Unit tests', estimation: 0},
  {name: 'Integration tests', estimation: 0},
  {name: 'e2e tests', estimation: 0},
  {name: 'Manuel tests', estimation: 0},
  {name: 'Code review', estimation: 0},
  {name: 'Log Events', estimation: 0},
  {name: 'Metrics', estimation: 0},
  {name: 'Alarm', estimation: 0},
  {name: 'Tracing', estimation: 0},
  {name: 'Performance', estimation: 0},
  {name: 'Package', estimation: 0},
  {name: 'Deployment', estimation: 0},
  {name: 'UX', estimation: 0},
  {name: 'UI', estimation: 0},
  {name: 'Accessibility', estimation: 0},
];

function Estimations(props) {
  const topicsName = {
    borderColor: '#E0E0E0',
    borderWidth: 0.5,
    borderStyle: 'solid',
    color: '#FFFFFF',
    padding: 12,
    fontSize: 20,
    backgroundColor: '#B00020',
  };

  const result = props.topics.map((t, index) => {
    const rightButtons = <Text style={topicsName}>Delete</Text>;

    return (
      <View key={index}>
        <Swipeable
          onRightActionRelease={() => props.deleteTopic(t.name)}
          rightContent={rightButtons}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#E0E0E0',
              borderWidth: 0.5,
              borderStyle: 'solid',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{flex: 0.5}}>{t.name}:</Text>
            <NumberInput topic={t} addEstimation={props.addEstimation} />
            <View style={{flex: 0.2}} />
          </View>
        </Swipeable>
      </View>
    );
  });

  return result;
}

const initialTopics = [
  {name: 'Documentation', estimation: 0},
  {name: 'Localisation', estimation: 0},
  {name: 'Legality', estimation: 0},
  {name: 'Security', estimation: 0},
  {name: 'Integration to the current system', estimation: 0},
  {name: 'Implementation of the code', estimation: 0},
  {name: 'Exception management', estimation: 0},
  {name: 'Unit tests', estimation: 0},
  {name: 'Integration tests', estimation: 0},
  {name: 'e2e tests', estimation: 0},
  {name: 'Manuel tests', estimation: 0},
  {name: 'Code review', estimation: 0},
  {name: 'Log Events', estimation: 0},
  {name: 'Metrics', estimation: 0},
  {name: 'Alarm', estimation: 0},
  {name: 'Tracing', estimation: 0},
  {name: 'Performance', estimation: 0},
  {name: 'Package', estimation: 0},
  {name: 'Deployment', estimation: 0},
  {name: 'UX', estimation: 0},
  {name: 'UI', estimation: 0},
  {name: 'Accessibility', estimation: 0},
];

function EstimationComponent() {
  const [topics, setTopics] = useState(initialTopics);

  function deleteElement(element) {
    const filteredElements = topics.filter(e => e.name !== element);
    setTopics(filteredElements);
  }

  function addEstimation(element, estimation) {
    const topicsWithEstimation = topics.map(e => {
      if (e.name === element) {
        e.estimation = estimation;
      }
      return e;
    });

    setTopics(topicsWithEstimation);
  }

  function reset() {
    setTopics(initialTopics);
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          backgroundColor: '#6200EE',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}>
        <View
          style={{
            width: 50,
          }}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 20,
          paddingBottom: 6,
          }}>
          Estimation time
        </Text>
        <Button
          onPress={reset}
          title="Reset"
          color="#FFFFFF"
          accessibilityLabel="Reset topics"
        />
      </View>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <IdealHours topics={topics} />
        <FibonacciProposition topics={topics} />
      </View>
      <View style={{flex: 4}}>
        <ScrollView>
          <Estimations
            topics={topics}
            deleteTopic={deleteElement}
            addEstimation={addEstimation}
          />
        </ScrollView>
      </View>
    </View>
  );
}

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <EstimationComponent />;
  }
}

function hidealHours(e) {
  let total = 0;
  for (let {estimation} of e) {
    if (estimation !== 0) {
      total += Number(estimation);
    }
  }
  const result = Math.round(total / 60);
  return result;
}

function IdealHours(props) {
  const idealHours = hidealHours(props.topics);
  return <Text>Ideal hours: {idealHours}</Text>;
}

function FibonacciProposition(props) {
  function closest(idealHour) {
    const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    const twoClosest = [];
    if (fibonacci.includes(idealHour)) {
      twoClosest.push(idealHour);
    }

    let min = idealHour - 1;
    let max = idealHour + 1;
    while (twoClosest.length < 2) {
      if (fibonacci.includes(max)) {
        twoClosest.push(max);
      } else if (fibonacci.includes(min)) {
        twoClosest.push(min);
      }
      min -= 1;
      max += 1;
    }
    return twoClosest.join(', ');
  }

  const idealHours = hidealHours(props.topics);
  const r = closest(idealHours);
  return <Text>Fibonacci propositions: {r}</Text>;
}

function NumberInput(props) {
  const [estimation, setEstimation] = useState('0');

  return (
    <TextInput
      style={{flex: 0.2, color: '#000000'}}
      keyboardType="numeric"
      selectTextOnFocus={true}
      onChangeText={input => {
        props.addEstimation(props.topic.name, input);
        setEstimation(input);
      }}
      value={props.topic.estimation.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
  },
});
