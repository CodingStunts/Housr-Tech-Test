import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

import { InvoiceCard } from "./InvoiceCard";
import { NoInvoices } from "./NoInvoices";

import { InvoiceSummary } from "../types/types";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  header: {
    width: "100%",
  },
  invoiceList: {
    width: "80%"
  }
});

export const InvoiceList = () => {
  let data = require("../db/data.json");

  const [invoices, setInvoices] = useState<InvoiceSummary[]>([]);

  useEffect(() => {
    setInvoices(data);
  }, [invoices]);

  const numberOfInvoices = invoices.length;

  const filterInvoices = () => {
    // Filter invoices;
  };

  const createInvoice = () => {
    // Navigate to InvoiceCreation
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Invoices</Text>
        <Text>
          {numberOfInvoices === 0
            ? "No invoices"
            : `${numberOfInvoices} invoices`}
        </Text>
        <Button title="Filter" onPress={filterInvoices} />
        <Button title="New" onPress={createInvoice} />
      </View>
      {numberOfInvoices === 0 ? (
        <NoInvoices />
      ) : (
        <FlatList
        style={styles.invoiceList}
          data={invoices}
          renderItem={({ item }) => {
            return InvoiceCard(item);
          }}
        />
      )}
    </View>
  );
};

export default InvoiceList;
