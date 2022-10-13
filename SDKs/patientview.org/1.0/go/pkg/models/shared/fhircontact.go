package shared

type FhirContact struct {
	ID     *int64  `json:"id"`
	System *string `json:"system"`
	Use    *string `json:"use"`
	Value  *string `json:"value"`
}
