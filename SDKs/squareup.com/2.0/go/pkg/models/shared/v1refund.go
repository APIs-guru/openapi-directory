package shared

type V1Refund struct {
	CreatedAt                  *string              `json:"created_at"`
	IsExchange                 *bool                `json:"is_exchange"`
	MerchantID                 *string              `json:"merchant_id"`
	PaymentID                  *string              `json:"payment_id"`
	ProcessedAt                *string              `json:"processed_at"`
	Reason                     *string              `json:"reason"`
	RefundedAdditiveTax        []V1PaymentTax       `json:"refunded_additive_tax"`
	RefundedAdditiveTaxMoney   *V1Money             `json:"refunded_additive_tax_money"`
	RefundedDiscountMoney      *V1Money             `json:"refunded_discount_money"`
	RefundedInclusiveTax       []V1PaymentTax       `json:"refunded_inclusive_tax"`
	RefundedInclusiveTaxMoney  *V1Money             `json:"refunded_inclusive_tax_money"`
	RefundedMoney              *V1Money             `json:"refunded_money"`
	RefundedProcessingFeeMoney *V1Money             `json:"refunded_processing_fee_money"`
	RefundedSurchargeMoney     *V1Money             `json:"refunded_surcharge_money"`
	RefundedSurcharges         []V1PaymentSurcharge `json:"refunded_surcharges"`
	RefundedTaxMoney           *V1Money             `json:"refunded_tax_money"`
	RefundedTipMoney           *V1Money             `json:"refunded_tip_money"`
	Type                       *string              `json:"type"`
}
