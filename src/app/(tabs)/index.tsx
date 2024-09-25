import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function TabOneScreen() {
    // use the useStyles hook to get the styles object
    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
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
