import { TextInput, View, Button, Text } from "react-native";
import { Controller, useForm } from "react-hook-form";

export const CreateInvoiceForm = () => {
  const addNewItem = () => {
    // Add a new item to form.
  };

  const submitForm = () => {};

  return (
    <View>
      <View>
        <Text>New Invoice</Text>
      </View>
      <View>
        <Text>Bill From</Text>
        <TextInput
          placeholder="Street Address"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="City"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Post Code"
          /* onChangeText={}
                value={} */
        />
        <TextInput
          placeholder="Country"
          /*  onChangeText={}
        value={} */
        />
        <Text>Bill To</Text>
        <TextInput
          placeholder="Client's Name"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Client's Email"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Street Address"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="City"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Post Code"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Country"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Invoice Date"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Payment Terms"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Project Description"
          /*  onChangeText={}
        value={} */
        />
        <Text>Item List</Text>
        <TextInput
          placeholder="Item Name"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Item Name"
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Qty."
          /*  onChangeText={}
        value={} */
        />
        <TextInput
          placeholder="Price"
          /*  onChangeText={}
        value={} */
        />
        <Button title="+ Add New Item" onPress={addNewItem} />
      </View>
    </View>
  );
};
