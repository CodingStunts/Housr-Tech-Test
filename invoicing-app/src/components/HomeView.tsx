import { View } from "react-native";
import InvoiceList from "./InvoiceList";
import { TopBar } from "./TopBar";

export const HomeView = () => {
  return (
    <View style={{width: "90%"}}>
      <TopBar />
      <InvoiceList />
    </View>
  );
};

export default HomeView;
