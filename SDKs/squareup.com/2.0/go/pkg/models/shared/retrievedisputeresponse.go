package shared

type RetrieveDisputeResponse struct {
	Dispute *Dispute `json:"dispute"`
	Errors  []Error  `json:"errors"`
}
