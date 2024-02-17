import {View, Text} from "react-native";
import { InvoiceDetails } from "../types/types";

export const InvoiceCard = (invoiceDetails: InvoiceDetails) => {
    return (
        <View>
            <Text>{invoiceDetails.id}</Text>
            <Text>{invoiceDetails.clientName}</Text>
            <Text>{invoiceDetails.dueDate}</Text>
            <Text>{invoiceDetails.amountInPounds}</Text>
            <Text>{invoiceDetails.status}</Text>
        </View>
    )
};

export default InvoiceCard;