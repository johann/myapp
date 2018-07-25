import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const Header = (props) => {
    return (React.createElement(View, { style: styles.container },
        React.createElement(Text, { style: styles.titleText }, props.title)));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#669999'
    },
    titleText: {
        color: '#fff',
        fontSize: 30
    }
});
export default Header;
//# sourceMappingURL=Header.js.map