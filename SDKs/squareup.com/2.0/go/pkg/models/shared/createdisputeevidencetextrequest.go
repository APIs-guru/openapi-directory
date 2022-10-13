package shared

type CreateDisputeEvidenceTextRequest struct {
	EvidenceText   string  `json:"evidence_text"`
	EvidenceType   *string `json:"evidence_type"`
	IdempotencyKey string  `json:"idempotency_key"`
}
