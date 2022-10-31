package shared



type CashDrawerShiftEvent struct {
    CreatedAt *string `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    EmployeeID *string `json:"employee_id,omitempty"`
    EventMoney *Money `json:"event_money,omitempty"`
    EventType *string `json:"event_type,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

