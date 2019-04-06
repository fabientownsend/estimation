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
    borderColor: '#333333',
    borderWidth: 0.5,
    borderStyle: 'solid',
    color: '#333333',
    padding: 10,
    fontSize: 20,
  };

  const result = props.topics.map((t, index) => {
    let swipeable = null;
    const bla = () => props.deleteTopic(t.name);

    const rightButtons = (
      <Text key={index} style={topicsName} onPress={() => {}}>
        Delete
      </Text>
    );

    return (
      <Swipeable
        onRef={ref => (swipeable = ref)}
        onRightActionRelease={bla}
        rightContent={rightButtons}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#333333',
            borderWidth: 0.5,
            borderStyle: 'solid',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{flex: 0.5}}>{t.name}:</Text>
          <NumberInput topic={t.name} addEstimation={props.addEstimation} />
          <View style={{flex: 0.2}} />
        </View>
      </Swipeable>
    );
  });

  return result;
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.deleteElement = this.deleteElement.bind(this);
    this.addEstimation = this.addEstimation.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      topics: [
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
      ],
    };
  }

  deleteElement(element) {
    const filteredElements = this.state.topics.filter(e => e.name !== element);
    this.setState({topics: filteredElements});
  }

  addEstimation(element, estimation) {
    const lol = this.state.topics.map(e => {
      if (e.name === element) {
        e.estimation = estimation;
      }
      return e;
    });

    this.setState({topics: lol});
  }

  reset() {
    this.setState({
      topics: [
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
      ],
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.welcome}>Estimation time!</Text>
          <Button
            onPress={this.reset}
            title="Reset"
            color="#841584"
            accessibilityLabel="Reset topics"
          />
          <IdealHours topics={this.state.topics} />
          <FibonacciProposition topics={this.state.topics} />
        </View>
        <View style={{flex: 4}}>
          <ScrollView>
            <Estimations
              topics={this.state.topics}
              deleteTopic={this.deleteElement}
              addEstimation={this.addEstimation}
            />
          </ScrollView>
        </View>
      </View>
    );
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
      onChangeText={input => {
        props.addEstimation(props.topic, input);
        setEstimation(input);
      }}
      value={estimation}
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
