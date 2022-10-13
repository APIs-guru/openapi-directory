package shared

type ListPaymentsResponse struct {
	Cursor   *string   `json:"cursor"`
	Errors   []Error   `json:"errors"`
	Payments []Payment `json:"payments"`
}
