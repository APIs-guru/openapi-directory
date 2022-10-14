package shared

type ListDisputesResponse struct {
	Cursor   *string   `json:"cursor,omitempty"`
	Disputes []Dispute `json:"disputes,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
