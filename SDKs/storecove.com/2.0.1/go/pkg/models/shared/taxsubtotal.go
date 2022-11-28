package shared

type TaxSubtotalTaxCategoryEnum string

const (
	TaxSubtotalTaxCategoryEnumStandard              TaxSubtotalTaxCategoryEnum = "standard"
	TaxSubtotalTaxCategoryEnumZeroRated             TaxSubtotalTaxCategoryEnum = "zero_rated"
	TaxSubtotalTaxCategoryEnumReverseCharge         TaxSubtotalTaxCategoryEnum = "reverse_charge"
	TaxSubtotalTaxCategoryEnumIntraCommunity        TaxSubtotalTaxCategoryEnum = "intra_community"
	TaxSubtotalTaxCategoryEnumExempt                TaxSubtotalTaxCategoryEnum = "exempt"
	TaxSubtotalTaxCategoryEnumExport                TaxSubtotalTaxCategoryEnum = "export"
	TaxSubtotalTaxCategoryEnumOutsideScope          TaxSubtotalTaxCategoryEnum = "outside_scope"
	TaxSubtotalTaxCategoryEnumRegulation33Exempt    TaxSubtotalTaxCategoryEnum = "regulation33_exempt"
	TaxSubtotalTaxCategoryEnumNonregulation33Exempt TaxSubtotalTaxCategoryEnum = "nonregulation33_exempt"
	TaxSubtotalTaxCategoryEnumDeemedSupply          TaxSubtotalTaxCategoryEnum = "deemed_supply"
	TaxSubtotalTaxCategoryEnumSrcaS                 TaxSubtotalTaxCategoryEnum = "srca_s"
	TaxSubtotalTaxCategoryEnumSrcaC                 TaxSubtotalTaxCategoryEnum = "srca_c"
	TaxSubtotalTaxCategoryEnumNotRegistered         TaxSubtotalTaxCategoryEnum = "not_registered"
	TaxSubtotalTaxCategoryEnumSalesTaxWork          TaxSubtotalTaxCategoryEnum = "sales_tax_work"
	TaxSubtotalTaxCategoryEnumServiceTax            TaxSubtotalTaxCategoryEnum = "service_tax"
	TaxSubtotalTaxCategoryEnumServiceTaxImport      TaxSubtotalTaxCategoryEnum = "service_tax_import"
	TaxSubtotalTaxCategoryEnumSalesToExportMarket   TaxSubtotalTaxCategoryEnum = "sales_to_export_market"
	TaxSubtotalTaxCategoryEnumSalesToSpecialArea    TaxSubtotalTaxCategoryEnum = "sales_to_special_area"
	TaxSubtotalTaxCategoryEnumSalesToDesignatedArea TaxSubtotalTaxCategoryEnum = "sales_to_designated_area"
	TaxSubtotalTaxCategoryEnumExemptionScheduleA    TaxSubtotalTaxCategoryEnum = "exemption_schedule_a"
	TaxSubtotalTaxCategoryEnumExemptionScheduleB    TaxSubtotalTaxCategoryEnum = "exemption_schedule_b"
	TaxSubtotalTaxCategoryEnumExemptionScheduleCa   TaxSubtotalTaxCategoryEnum = "exemption_schedule_c_a"
	TaxSubtotalTaxCategoryEnumExemptionScheduleCb   TaxSubtotalTaxCategoryEnum = "exemption_schedule_c_b"
	TaxSubtotalTaxCategoryEnumExemptionScheduleCc   TaxSubtotalTaxCategoryEnum = "exemption_schedule_c_c"
	TaxSubtotalTaxCategoryEnumExemptionServiceTax   TaxSubtotalTaxCategoryEnum = "exemption_service_tax"
)

// TaxSubtotal
// The total amount of tax of this type in the invoice.
type TaxSubtotal struct {
	Category      *TaxSubtotalTaxCategoryEnum `json:"category,omitempty"`
	Country       *CountryEnum                `json:"country,omitempty"`
	Percentage    *float64                    `json:"percentage,omitempty"`
	TaxAmount     *float64                    `json:"taxAmount,omitempty"`
	TaxableAmount float64                     `json:"taxableAmount"`
}
