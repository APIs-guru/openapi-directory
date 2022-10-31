package shared

type CatalogTax struct {
	AppliesToCustomAmounts *bool   `json:"applies_to_custom_amounts,omitempty"`
	CalculationPhase       *string `json:"calculation_phase,omitempty"`
	Enabled                *bool   `json:"enabled,omitempty"`
	InclusionType          *string `json:"inclusion_type,omitempty"`
	Name                   *string `json:"name,omitempty"`
	Percentage             *string `json:"percentage,omitempty"`
}
