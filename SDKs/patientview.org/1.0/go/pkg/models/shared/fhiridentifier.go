package shared

type FhirIdentifier struct {
	ID    *int64  `json:"id"`
	Label *string `json:"label"`
	Value *string `json:"value"`
}
