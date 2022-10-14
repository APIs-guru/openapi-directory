package shared

type ListPaymentsResponse struct {
	Cursor   *string   `json:"cursor,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
	Payments []Payment `json:"payments,omitempty"`
}
