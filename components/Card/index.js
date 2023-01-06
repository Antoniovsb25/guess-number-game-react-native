import { StyleSheet, View, Dimensions } from "react-native";

import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    elevation: 4, //Android specific
    shadowColor: "black", //iOS specific
    shadowOffset: { width: 0, height: 2 }, //iOS specific
    shadowRadius: 6, //iOS specific
    shadowOpacity: 0.25, //iOS specific
    borderRadius: 8,
  },
});

export default Card;
