package shared

type OrderServiceCharge struct {
	AmountMoney      *Money                    `json:"amount_money"`
	AppliedMoney     *Money                    `json:"applied_money"`
	AppliedTaxes     []OrderLineItemAppliedTax `json:"applied_taxes"`
	CalculationPhase *string                   `json:"calculation_phase"`
	CatalogObjectID  *string                   `json:"catalog_object_id"`
	CatalogVersion   *int64                    `json:"catalog_version"`
	Metadata         map[string]string         `json:"metadata"`
	Name             *string                   `json:"name"`
	Percentage       *string                   `json:"percentage"`
	Taxable          *bool                     `json:"taxable"`
	TotalMoney       *Money                    `json:"total_money"`
	TotalTaxMoney    *Money                    `json:"total_tax_money"`
	Type             *string                   `json:"type"`
	UID              *string                   `json:"uid"`
}
