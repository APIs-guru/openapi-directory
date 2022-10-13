package shared

type AcceptDisputeResponse struct {
	Dispute *Dispute `json:"dispute"`
	Errors  []Error  `json:"errors"`
}
