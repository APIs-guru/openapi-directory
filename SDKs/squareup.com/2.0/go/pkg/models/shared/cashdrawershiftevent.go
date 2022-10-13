package shared

type CashDrawerShiftEvent struct {
	CreatedAt   *string `json:"created_at"`
	Description *string `json:"description"`
	EmployeeID  *string `json:"employee_id"`
	EventMoney  *Money  `json:"event_money"`
	EventType   *string `json:"event_type"`
	ID          *string `json:"id"`
}
