import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "List"
  };
  state = {
    names: [
      {
        id: 0,
        image:
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwitzd-I1-rfAhUDThoKHcrxCBgQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fchannel%252FUClJ_9lP6dxUh79Y0EKbo45g%26psig%3DAOvVaw0njuIMvXJk-waeOo-ywHrW%26ust%3D1547466221396251&psig=AOvVaw0njuIMvXJk-waeOo-ywHrW&ust=1547466221396251",
        name: "James",
        desc: "android dev"
      },
      {
        id: 1,
        image:
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwic5qni1erfAhVJx4UKHYxgCfwQjRx6BAgBEAU&url=https%3A%2F%2Fgithub.com%2FEmmzzo&psig=AOvVaw0U-eTvKLVrRD2QltWV1cVz&ust=1547465871483127",
        name: "Rashid",
        desc: "UI/UX dev"
      },
      {
        id: 2,
        image:
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwic5qni1erfAhVJx4UKHYxgCfwQjRx6BAgBEAU&url=https%3A%2F%2Fgithub.com%2FEmmzzo&psig=AOvVaw0U-eTvKLVrRD2QltWV1cVz&ust=1547465871483127",
        name: "Emmi",
        desc: "ussd dev"
      },
      {
        id: 3,
        image:
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwitzd-I1-rfAhUDThoKHcrxCBgQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fchannel%252FUClJ_9lP6dxUh79Y0EKbo45g%26psig%3DAOvVaw0njuIMvXJk-waeOo-ywHrW%26ust%3D1547466221396251&psig=AOvVaw0njuIMvXJk-waeOo-ywHrW&ust=1547466221396251",
        name: "Matt",
        desc: "web dev"
      }
    ]
  };
  alertItemName = item => {
    alert(item.name+" "+item.desc);
  };
  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            {/* <Text style={styles.text}>{item.image}</Text> */}
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 3,
    // backgroundColor: "#d9f9b1",
    alignItems: "center"
  },
  text: {
    color: "#4f603c"
  }
});
// render() {
//   /* Go ahead and delete ExpoConfigView and replace it with your
//    * content, we just wanted to give you a quick view of your config */
//   return <ExpoConfigView />;
// }
