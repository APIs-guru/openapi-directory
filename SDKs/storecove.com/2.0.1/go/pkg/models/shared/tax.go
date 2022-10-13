package shared

type TaxCategoryTaxCategoryEnum string

const (
	TaxCategoryTaxCategoryEnumStandard              TaxCategoryTaxCategoryEnum = "standard"
	TaxCategoryTaxCategoryEnumZeroRated             TaxCategoryTaxCategoryEnum = "zero_rated"
	TaxCategoryTaxCategoryEnumReverseCharge         TaxCategoryTaxCategoryEnum = "reverse_charge"
	TaxCategoryTaxCategoryEnumIntraCommunity        TaxCategoryTaxCategoryEnum = "intra_community"
	TaxCategoryTaxCategoryEnumExempt                TaxCategoryTaxCategoryEnum = "exempt"
	TaxCategoryTaxCategoryEnumExport                TaxCategoryTaxCategoryEnum = "export"
	TaxCategoryTaxCategoryEnumOutsideScope          TaxCategoryTaxCategoryEnum = "outside_scope"
	TaxCategoryTaxCategoryEnumRegulation33Exempt    TaxCategoryTaxCategoryEnum = "regulation33_exempt"
	TaxCategoryTaxCategoryEnumNonregulation33Exempt TaxCategoryTaxCategoryEnum = "nonregulation33_exempt"
	TaxCategoryTaxCategoryEnumDeemedSupply          TaxCategoryTaxCategoryEnum = "deemed_supply"
	TaxCategoryTaxCategoryEnumSrcaS                 TaxCategoryTaxCategoryEnum = "srca_s"
	TaxCategoryTaxCategoryEnumSrcaC                 TaxCategoryTaxCategoryEnum = "srca_c"
	TaxCategoryTaxCategoryEnumNotRegistered         TaxCategoryTaxCategoryEnum = "not_registered"
	TaxCategoryTaxCategoryEnumSalesTax              TaxCategoryTaxCategoryEnum = "sales_tax"
	TaxCategoryTaxCategoryEnumSalesTaxWork          TaxCategoryTaxCategoryEnum = "sales_tax_work"
	TaxCategoryTaxCategoryEnumServiceTax            TaxCategoryTaxCategoryEnum = "service_tax"
	TaxCategoryTaxCategoryEnumServiceTaxImport      TaxCategoryTaxCategoryEnum = "service_tax_import"
	TaxCategoryTaxCategoryEnumSalesToExportMarket   TaxCategoryTaxCategoryEnum = "sales_to_export_market"
	TaxCategoryTaxCategoryEnumSalesToSpecialArea    TaxCategoryTaxCategoryEnum = "sales_to_special_area"
	TaxCategoryTaxCategoryEnumSalesToDesignatedArea TaxCategoryTaxCategoryEnum = "sales_to_designated_area"
	TaxCategoryTaxCategoryEnumExemptionScheduleA    TaxCategoryTaxCategoryEnum = "exemption_schedule_a"
	TaxCategoryTaxCategoryEnumExemptionScheduleB    TaxCategoryTaxCategoryEnum = "exemption_schedule_b"
	TaxCategoryTaxCategoryEnumExemptionScheduleCa   TaxCategoryTaxCategoryEnum = "exemption_schedule_c_a"
	TaxCategoryTaxCategoryEnumExemptionScheduleCb   TaxCategoryTaxCategoryEnum = "exemption_schedule_c_b"
	TaxCategoryTaxCategoryEnumExemptionScheduleCc   TaxCategoryTaxCategoryEnum = "exemption_schedule_c_c"
	TaxCategoryTaxCategoryEnumExemptionServiceTax   TaxCategoryTaxCategoryEnum = "exemption_service_tax"
)

type Tax struct {
	Amount     *float64                    `json:"amount"`
	Category   *TaxCategoryTaxCategoryEnum `json:"category"`
	Country    CountryEnum                 `json:"country"`
	Percentage *float64                    `json:"percentage"`
}
