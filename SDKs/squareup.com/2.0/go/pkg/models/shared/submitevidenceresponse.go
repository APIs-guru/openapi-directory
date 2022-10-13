package shared

type SubmitEvidenceResponse struct {
	Dispute *Dispute `json:"dispute"`
	Errors  []Error  `json:"errors"`
}
