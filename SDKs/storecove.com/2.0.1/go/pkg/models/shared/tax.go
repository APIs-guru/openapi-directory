package shared

type TaxTaxCategoryEnum string

const (
	TaxTaxCategoryEnumStandard              TaxTaxCategoryEnum = "standard"
	TaxTaxCategoryEnumZeroRated             TaxTaxCategoryEnum = "zero_rated"
	TaxTaxCategoryEnumReverseCharge         TaxTaxCategoryEnum = "reverse_charge"
	TaxTaxCategoryEnumIntraCommunity        TaxTaxCategoryEnum = "intra_community"
	TaxTaxCategoryEnumExempt                TaxTaxCategoryEnum = "exempt"
	TaxTaxCategoryEnumExport                TaxTaxCategoryEnum = "export"
	TaxTaxCategoryEnumOutsideScope          TaxTaxCategoryEnum = "outside_scope"
	TaxTaxCategoryEnumRegulation33Exempt    TaxTaxCategoryEnum = "regulation33_exempt"
	TaxTaxCategoryEnumNonregulation33Exempt TaxTaxCategoryEnum = "nonregulation33_exempt"
	TaxTaxCategoryEnumDeemedSupply          TaxTaxCategoryEnum = "deemed_supply"
	TaxTaxCategoryEnumSrcaS                 TaxTaxCategoryEnum = "srca_s"
	TaxTaxCategoryEnumSrcaC                 TaxTaxCategoryEnum = "srca_c"
	TaxTaxCategoryEnumNotRegistered         TaxTaxCategoryEnum = "not_registered"
	TaxTaxCategoryEnumSalesTax              TaxTaxCategoryEnum = "sales_tax"
	TaxTaxCategoryEnumSalesTaxWork          TaxTaxCategoryEnum = "sales_tax_work"
	TaxTaxCategoryEnumServiceTax            TaxTaxCategoryEnum = "service_tax"
	TaxTaxCategoryEnumServiceTaxImport      TaxTaxCategoryEnum = "service_tax_import"
	TaxTaxCategoryEnumSalesToExportMarket   TaxTaxCategoryEnum = "sales_to_export_market"
	TaxTaxCategoryEnumSalesToSpecialArea    TaxTaxCategoryEnum = "sales_to_special_area"
	TaxTaxCategoryEnumSalesToDesignatedArea TaxTaxCategoryEnum = "sales_to_designated_area"
	TaxTaxCategoryEnumExemptionScheduleA    TaxTaxCategoryEnum = "exemption_schedule_a"
	TaxTaxCategoryEnumExemptionScheduleB    TaxTaxCategoryEnum = "exemption_schedule_b"
	TaxTaxCategoryEnumExemptionScheduleCa   TaxTaxCategoryEnum = "exemption_schedule_c_a"
	TaxTaxCategoryEnumExemptionScheduleCb   TaxTaxCategoryEnum = "exemption_schedule_c_b"
	TaxTaxCategoryEnumExemptionScheduleCc   TaxTaxCategoryEnum = "exemption_schedule_c_c"
	TaxTaxCategoryEnumExemptionServiceTax   TaxTaxCategoryEnum = "exemption_service_tax"
)

type Tax struct {
	Amount     *float64            `json:"amount,omitempty"`
	Category   *TaxTaxCategoryEnum `json:"category,omitempty"`
	Country    CountryEnum         `json:"country"`
	Percentage *float64            `json:"percentage,omitempty"`
}
