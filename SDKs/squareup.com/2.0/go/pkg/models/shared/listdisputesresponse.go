package shared

type ListDisputesResponse struct {
	Cursor   *string   `json:"cursor"`
	Disputes []Dispute `json:"disputes"`
	Errors   []Error   `json:"errors"`
}
