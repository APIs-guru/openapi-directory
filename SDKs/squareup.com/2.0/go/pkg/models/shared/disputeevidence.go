package shared

type DisputeEvidence struct {
	DisputeID    *string              `json:"dispute_id"`
	EvidenceFile *DisputeEvidenceFile `json:"evidence_file"`
	EvidenceID   *string              `json:"evidence_id"`
	EvidenceText *string              `json:"evidence_text"`
	EvidenceType *string              `json:"evidence_type"`
	ID           *string              `json:"id"`
	UploadedAt   *string              `json:"uploaded_at"`
}
