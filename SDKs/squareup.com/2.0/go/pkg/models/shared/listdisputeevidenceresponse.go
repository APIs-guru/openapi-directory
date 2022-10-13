package shared

type ListDisputeEvidenceResponse struct {
	Cursor   *string           `json:"cursor"`
	Errors   []Error           `json:"errors"`
	Evidence []DisputeEvidence `json:"evidence"`
}
