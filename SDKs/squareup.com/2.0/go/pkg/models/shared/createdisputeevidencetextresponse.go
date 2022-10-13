package shared

type CreateDisputeEvidenceTextResponse struct {
	Errors   []Error          `json:"errors"`
	Evidence *DisputeEvidence `json:"evidence"`
}
