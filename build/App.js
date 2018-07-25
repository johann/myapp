import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './component/Header';
export default class App extends Component {
    render() {
        const { container, header, content } = styles;
        return (React.createElement(View, { style: container },
            React.createElement(View, { style: header },
                React.createElement(Header, { title: 'Learn' })),
            React.createElement(View, { style: content },
                React.createElement(Button, { title: "LOADING BUTTON", loading: true, loadingProps: { size: "large", color: "rgba(111, 202, 186, 1)" }, titleStyle: { fontWeight: "700" }, buttonStyle: {
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }, containerStyle: { marginTop: 20 } }))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
    },
    header: {
        flex: 1
    },
    content: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=App.js.map