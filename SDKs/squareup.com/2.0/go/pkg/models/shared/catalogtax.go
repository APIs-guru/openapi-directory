package shared

type CatalogTax struct {
	AppliesToCustomAmounts *bool   `json:"applies_to_custom_amounts"`
	CalculationPhase       *string `json:"calculation_phase"`
	Enabled                *bool   `json:"enabled"`
	InclusionType          *string `json:"inclusion_type"`
	Name                   *string `json:"name"`
	Percentage             *string `json:"percentage"`
}
