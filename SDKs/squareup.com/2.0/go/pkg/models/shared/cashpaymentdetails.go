package shared



type CashPaymentDetails struct {
    BuyerSuppliedMoney Money `json:"buyer_supplied_money"`
    ChangeBackMoney *Money `json:"change_back_money,omitempty"`
    
}

