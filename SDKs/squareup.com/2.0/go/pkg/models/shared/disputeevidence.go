package shared

type DisputeEvidence struct {
	DisputeID    *string              `json:"dispute_id,omitempty"`
	EvidenceFile *DisputeEvidenceFile `json:"evidence_file,omitempty"`
	EvidenceID   *string              `json:"evidence_id,omitempty"`
	EvidenceText *string              `json:"evidence_text,omitempty"`
	EvidenceType *string              `json:"evidence_type,omitempty"`
	ID           *string              `json:"id,omitempty"`
	UploadedAt   *string              `json:"uploaded_at,omitempty"`
}
