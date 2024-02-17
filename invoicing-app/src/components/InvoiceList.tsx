import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { InvoiceCard } from "./InvoiceCard";

export const InvoiceList = () => {

  const [invoices, setInvoices] = useState<[]>([]);
  
  const numberOfInvoices = invoices.length;

  return (
    <View>
      <Text>Invoices</Text>
      <Text>{numberOfInvoices} invoices</Text>
      <FlatList
        data={invoices}
        renderItem={(invoice) => {
          return InvoiceCard(invoice);
        }}
      ></FlatList>
    </View>
  );
};

export default InvoiceList;
