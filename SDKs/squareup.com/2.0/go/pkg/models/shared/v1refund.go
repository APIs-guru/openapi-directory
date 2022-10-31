package shared



type V1Refund struct {
    CreatedAt *string `json:"created_at,omitempty"`
    IsExchange *bool `json:"is_exchange,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    PaymentID *string `json:"payment_id,omitempty"`
    ProcessedAt *string `json:"processed_at,omitempty"`
    Reason *string `json:"reason,omitempty"`
    RefundedAdditiveTax []V1PaymentTax `json:"refunded_additive_tax,omitempty"`
    RefundedAdditiveTaxMoney *V1Money `json:"refunded_additive_tax_money,omitempty"`
    RefundedDiscountMoney *V1Money `json:"refunded_discount_money,omitempty"`
    RefundedInclusiveTax []V1PaymentTax `json:"refunded_inclusive_tax,omitempty"`
    RefundedInclusiveTaxMoney *V1Money `json:"refunded_inclusive_tax_money,omitempty"`
    RefundedMoney *V1Money `json:"refunded_money,omitempty"`
    RefundedProcessingFeeMoney *V1Money `json:"refunded_processing_fee_money,omitempty"`
    RefundedSurchargeMoney *V1Money `json:"refunded_surcharge_money,omitempty"`
    RefundedSurcharges []V1PaymentSurcharge `json:"refunded_surcharges,omitempty"`
    RefundedTaxMoney *V1Money `json:"refunded_tax_money,omitempty"`
    RefundedTipMoney *V1Money `json:"refunded_tip_money,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

