export const getFormattedAmount = (amount: number) => {
  let formatCurrency = Intl.NumberFormat("en-US");
  return formatCurrency.format(amount);
};
