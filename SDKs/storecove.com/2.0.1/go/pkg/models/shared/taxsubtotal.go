package shared

type TaxSubtotalCategoryTaxCategoryEnum string

const (
	TaxSubtotalCategoryTaxCategoryEnumStandard              TaxSubtotalCategoryTaxCategoryEnum = "standard"
	TaxSubtotalCategoryTaxCategoryEnumZeroRated             TaxSubtotalCategoryTaxCategoryEnum = "zero_rated"
	TaxSubtotalCategoryTaxCategoryEnumReverseCharge         TaxSubtotalCategoryTaxCategoryEnum = "reverse_charge"
	TaxSubtotalCategoryTaxCategoryEnumIntraCommunity        TaxSubtotalCategoryTaxCategoryEnum = "intra_community"
	TaxSubtotalCategoryTaxCategoryEnumExempt                TaxSubtotalCategoryTaxCategoryEnum = "exempt"
	TaxSubtotalCategoryTaxCategoryEnumExport                TaxSubtotalCategoryTaxCategoryEnum = "export"
	TaxSubtotalCategoryTaxCategoryEnumOutsideScope          TaxSubtotalCategoryTaxCategoryEnum = "outside_scope"
	TaxSubtotalCategoryTaxCategoryEnumRegulation33Exempt    TaxSubtotalCategoryTaxCategoryEnum = "regulation33_exempt"
	TaxSubtotalCategoryTaxCategoryEnumNonregulation33Exempt TaxSubtotalCategoryTaxCategoryEnum = "nonregulation33_exempt"
	TaxSubtotalCategoryTaxCategoryEnumDeemedSupply          TaxSubtotalCategoryTaxCategoryEnum = "deemed_supply"
	TaxSubtotalCategoryTaxCategoryEnumSrcaS                 TaxSubtotalCategoryTaxCategoryEnum = "srca_s"
	TaxSubtotalCategoryTaxCategoryEnumSrcaC                 TaxSubtotalCategoryTaxCategoryEnum = "srca_c"
	TaxSubtotalCategoryTaxCategoryEnumNotRegistered         TaxSubtotalCategoryTaxCategoryEnum = "not_registered"
	TaxSubtotalCategoryTaxCategoryEnumSalesTaxWork          TaxSubtotalCategoryTaxCategoryEnum = "sales_tax_work"
	TaxSubtotalCategoryTaxCategoryEnumServiceTax            TaxSubtotalCategoryTaxCategoryEnum = "service_tax"
	TaxSubtotalCategoryTaxCategoryEnumServiceTaxImport      TaxSubtotalCategoryTaxCategoryEnum = "service_tax_import"
	TaxSubtotalCategoryTaxCategoryEnumSalesToExportMarket   TaxSubtotalCategoryTaxCategoryEnum = "sales_to_export_market"
	TaxSubtotalCategoryTaxCategoryEnumSalesToSpecialArea    TaxSubtotalCategoryTaxCategoryEnum = "sales_to_special_area"
	TaxSubtotalCategoryTaxCategoryEnumSalesToDesignatedArea TaxSubtotalCategoryTaxCategoryEnum = "sales_to_designated_area"
	TaxSubtotalCategoryTaxCategoryEnumExemptionScheduleA    TaxSubtotalCategoryTaxCategoryEnum = "exemption_schedule_a"
	TaxSubtotalCategoryTaxCategoryEnumExemptionScheduleB    TaxSubtotalCategoryTaxCategoryEnum = "exemption_schedule_b"
	TaxSubtotalCategoryTaxCategoryEnumExemptionScheduleCa   TaxSubtotalCategoryTaxCategoryEnum = "exemption_schedule_c_a"
	TaxSubtotalCategoryTaxCategoryEnumExemptionScheduleCb   TaxSubtotalCategoryTaxCategoryEnum = "exemption_schedule_c_b"
	TaxSubtotalCategoryTaxCategoryEnumExemptionScheduleCc   TaxSubtotalCategoryTaxCategoryEnum = "exemption_schedule_c_c"
	TaxSubtotalCategoryTaxCategoryEnumExemptionServiceTax   TaxSubtotalCategoryTaxCategoryEnum = "exemption_service_tax"
)

type TaxSubtotal struct {
	Category      *TaxSubtotalCategoryTaxCategoryEnum `json:"category,omitempty"`
	Country       *CountryEnum                        `json:"country,omitempty"`
	Percentage    *float64                            `json:"percentage,omitempty"`
	TaxAmount     *float64                            `json:"taxAmount,omitempty"`
	TaxableAmount float64                             `json:"taxableAmount"`
}
