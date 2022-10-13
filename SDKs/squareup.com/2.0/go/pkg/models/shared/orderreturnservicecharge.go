package shared

type OrderReturnServiceCharge struct {
	AmountMoney            *Money                    `json:"amount_money"`
	AppliedMoney           *Money                    `json:"applied_money"`
	AppliedTaxes           []OrderLineItemAppliedTax `json:"applied_taxes"`
	CalculationPhase       *string                   `json:"calculation_phase"`
	CatalogObjectID        *string                   `json:"catalog_object_id"`
	CatalogVersion         *int64                    `json:"catalog_version"`
	Name                   *string                   `json:"name"`
	Percentage             *string                   `json:"percentage"`
	SourceServiceChargeUID *string                   `json:"source_service_charge_uid"`
	Taxable                *bool                     `json:"taxable"`
	TotalMoney             *Money                    `json:"total_money"`
	TotalTaxMoney          *Money                    `json:"total_tax_money"`
	UID                    *string                   `json:"uid"`
}
