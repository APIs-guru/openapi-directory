package shared

type AcceptDisputeResponse struct {
	Dispute *Dispute `json:"dispute,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
