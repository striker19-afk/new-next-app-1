type Key = { [key: string]: string };
export const statusStyle: {
  primary: Key;
  secondary: Key;
  formattedText: Key;
} = {
  primary: {
    Active: "#1D856C",
    Suspended: "#7D7D85",
    AwaitingPayment: "#F9BB5A",
    Success: "#1D856C",
  },
  secondary: {
    Active: "#D7F1EB",
    Suspended: "#F1F2F3",
    AwaitingPayment: "#FEF2E0",
    Success: "#D7F1EB",
  },
  formattedText: {
    Active: "Active",
    Suspended: "Suspended",
    AwaitingPayment: "Awaiting Payment",
    Success: "Success",
  },
};
