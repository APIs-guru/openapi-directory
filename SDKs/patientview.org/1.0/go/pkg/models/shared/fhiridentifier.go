package shared

type FhirIdentifier struct {
	ID    *int64  `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Value *string `json:"value,omitempty"`
}
