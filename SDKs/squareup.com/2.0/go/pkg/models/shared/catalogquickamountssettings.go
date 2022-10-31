package shared

type CatalogQuickAmountsSettings struct {
	Amounts                []CatalogQuickAmount `json:"amounts,omitempty"`
	EligibleForAutoAmounts *bool                `json:"eligible_for_auto_amounts,omitempty"`
	Option                 string               `json:"option"`
}
