package shared

type V1Payment struct {
	AdditiveTax          []V1PaymentTax         `json:"additive_tax"`
	AdditiveTaxMoney     *V1Money               `json:"additive_tax_money"`
	CreatedAt            *string                `json:"created_at"`
	CreatorID            *string                `json:"creator_id"`
	Device               *Device                `json:"device"`
	DiscountMoney        *V1Money               `json:"discount_money"`
	GrossSalesMoney      *V1Money               `json:"gross_sales_money"`
	ID                   *string                `json:"id"`
	InclusiveTax         []V1PaymentTax         `json:"inclusive_tax"`
	InclusiveTaxMoney    *V1Money               `json:"inclusive_tax_money"`
	IsPartial            *bool                  `json:"is_partial"`
	Itemizations         []V1PaymentItemization `json:"itemizations"`
	MerchantID           *string                `json:"merchant_id"`
	NetSalesMoney        *V1Money               `json:"net_sales_money"`
	NetTotalMoney        *V1Money               `json:"net_total_money"`
	PaymentURL           *string                `json:"payment_url"`
	ProcessingFeeMoney   *V1Money               `json:"processing_fee_money"`
	ReceiptURL           *string                `json:"receipt_url"`
	RefundedMoney        *V1Money               `json:"refunded_money"`
	Refunds              []V1Refund             `json:"refunds"`
	SurchargeMoney       *V1Money               `json:"surcharge_money"`
	Surcharges           []V1PaymentSurcharge   `json:"surcharges"`
	SwedishRoundingMoney *V1Money               `json:"swedish_rounding_money"`
	TaxMoney             *V1Money               `json:"tax_money"`
	Tender               []V1Tender             `json:"tender"`
	TipMoney             *V1Money               `json:"tip_money"`
	TotalCollectedMoney  *V1Money               `json:"total_collected_money"`
}
