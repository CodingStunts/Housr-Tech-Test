import { View } from "react-native";
import InvoiceList from "../components/InvoiceList";
import { TopBar } from "../components/TopBar";

export const HomeView = () => {
  return (
    <View style={{width: "100%"}}>
      <TopBar />
      <InvoiceList />
    </View>
  );
};

export default HomeView;
