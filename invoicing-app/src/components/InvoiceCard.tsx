import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { InvoiceSummary } from "../types/types";

const styles = StyleSheet.create({
    listContainer: { marginVertical: 30, width: "100%",  }
  });

export const InvoiceCard = (invoiceDetails: InvoiceSummary) => {
  const { id, clientName, paymentDue, total, status } = invoiceDetails;

    const selectInvoice = (invoiceId: typeof id) => {
        // navigate to invoice summary page via ID.
    };

  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={() => selectInvoice(id)}>
        <Text>{id}</Text>
        <Text>{clientName}</Text>
        <Text>{paymentDue}</Text>
        <Text>{total}</Text>
        <Text>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvoiceCard;
