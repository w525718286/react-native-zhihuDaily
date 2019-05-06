import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button
} from "native-base";
import { Api, Tools, Axios, System } from "../../config";
export default class index extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "注册"
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: null
    };
  }
  gotoJoin = () => {
    if (!this.state.phoneNum) {
      Tools.toast('请填写手机号')
    } else {
      this.props.navigation.navigate("Join", {
        phoneNum: this.state.phoneNum
      });
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Item inlineLabel laster style={styles.item}>
            <Label style={styles.label}>手机号</Label>
            <Input
              style={styles.input}
              placeholder="填写手机号"
              placeholderTextColor={"#999"}
              clearButtonMode={"unless-editing"}
              autoComplete={"tel"}
              autoFocus={true}
              keyboardType={"numeric"}
              returnKeyType={"go"}
              onChangeText={text => {
                this.setState({
                  phoneNum: text
                });
              }}
              onSubmitEditing={this.gotoJoin}
            />
          </Item>
          <Button
            full
            style={[
              styles.submitBtn,
              this.state.phoneNum
                ? { backgroundColor: "#00a2ed" }
                : { backgroundColor: "#eaeaea" }
            ]}
            onPress={this.gotoJoin}
          >
            <Text
              style={[
                styles.submitText,
                this.state.phoneNum ? { color: "#fff" } : { color: "#494949" }
              ]}
            >
              获取验证码
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    marginTop: 20,
    height: 60,
    borderColor: "#e8e8e8"
  },
  label: {
    marginLeft: 20
  },
  input: {
    fontSize: 14
  },
  submitText: {
    color: "#494949"
  },
  submitBtn: {
    borderRadius: 2,
    marginHorizontal:40,
    justifyContent: "center",
    marginTop: 30
  }
});
