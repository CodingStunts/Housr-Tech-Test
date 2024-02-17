import { View } from "react-native";

import {CreateInvoiceForm} from "../components/CreateInvoiceForm";
import { TopBar } from "../components/TopBar";

export const InvoiceCreationView = () => {
  return (
    <View style={{width: "100%"}}>
      <TopBar />
      <CreateInvoiceForm />
    </View>
  );
};

export default InvoiceCreationView;
