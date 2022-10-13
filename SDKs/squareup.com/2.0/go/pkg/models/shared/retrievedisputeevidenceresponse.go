package shared

type RetrieveDisputeEvidenceResponse struct {
	Errors   []Error          `json:"errors"`
	Evidence *DisputeEvidence `json:"evidence"`
}
