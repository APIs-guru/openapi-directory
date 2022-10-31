package shared



type CashDrawerShiftSummary struct {
    ClosedAt *string `json:"closed_at,omitempty"`
    ClosedCashMoney *Money `json:"closed_cash_money,omitempty"`
    Description *string `json:"description,omitempty"`
    EndedAt *string `json:"ended_at,omitempty"`
    ExpectedCashMoney *Money `json:"expected_cash_money,omitempty"`
    ID *string `json:"id,omitempty"`
    OpenedAt *string `json:"opened_at,omitempty"`
    OpenedCashMoney *Money `json:"opened_cash_money,omitempty"`
    State *string `json:"state,omitempty"`
    
}

