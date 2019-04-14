import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 20,
        backgroundColor: "#eee",
        marginBottom: 5
    }
  });

export default listItem