package shared

type RetrieveDisputeResponse struct {
	Dispute *Dispute `json:"dispute,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
