package shared

type CatalogQuickAmountsSettings struct {
	Amounts                []CatalogQuickAmount `json:"amounts"`
	EligibleForAutoAmounts *bool                `json:"eligible_for_auto_amounts"`
	Option                 string               `json:"option"`
}
