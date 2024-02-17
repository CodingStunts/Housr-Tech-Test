export type InvoiceSummary = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: [
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }
  ];
  total: number;
};

export type InvoiceDetails = {
  id: string;
  dueDate: string;
  clientName: string;
  amountInPounds: string;
  status: string;
};
