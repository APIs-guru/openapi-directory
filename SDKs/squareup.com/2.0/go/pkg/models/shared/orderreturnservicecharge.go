package shared

type OrderReturnServiceCharge struct {
	AmountMoney            *Money                    `json:"amount_money,omitempty"`
	AppliedMoney           *Money                    `json:"applied_money,omitempty"`
	AppliedTaxes           []OrderLineItemAppliedTax `json:"applied_taxes,omitempty"`
	CalculationPhase       *string                   `json:"calculation_phase,omitempty"`
	CatalogObjectID        *string                   `json:"catalog_object_id,omitempty"`
	CatalogVersion         *int64                    `json:"catalog_version,omitempty"`
	Name                   *string                   `json:"name,omitempty"`
	Percentage             *string                   `json:"percentage,omitempty"`
	SourceServiceChargeUID *string                   `json:"source_service_charge_uid,omitempty"`
	Taxable                *bool                     `json:"taxable,omitempty"`
	TotalMoney             *Money                    `json:"total_money,omitempty"`
	TotalTaxMoney          *Money                    `json:"total_tax_money,omitempty"`
	UID                    *string                   `json:"uid,omitempty"`
}
