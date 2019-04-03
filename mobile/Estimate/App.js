import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
    const rightButtons = [
      <Text
        key={index}
        style={topicsName}
        onPress={() => {
          swipeable.recenter();
          props.deleteTopic(t.name);
        }}>
        Delete
      </Text>,
    ];

    return (
      <Swipeable onRef={ref => (swipeable = ref)} rightButtons={rightButtons}>
        <Text style={topicsName}>{t.name}</Text>
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

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.welcome}>Estimation time!</Text>
        </View>
        <View style={{flex: 4}}>
        <ScrollView>
          <Estimations
            topics={this.state.topics}
            deleteTopic={this.deleteElement}
          />
        </ScrollView>
        </View>
      </View>
    );
  }
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
