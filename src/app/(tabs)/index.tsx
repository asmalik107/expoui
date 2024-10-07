import { Button, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import * as Sentry from "@sentry/react-native";

export default function TabOneScreen() {
    // use the useStyles hook to get the styles object
    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>
        </View>
    );
}

const stylesheet = createStyleSheet((theme) => ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.typography
    }
}));
