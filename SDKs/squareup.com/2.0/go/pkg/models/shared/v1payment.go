package shared



type V1Payment struct {
    AdditiveTax []V1PaymentTax `json:"additive_tax,omitempty"`
    AdditiveTaxMoney *V1Money `json:"additive_tax_money,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    CreatorID *string `json:"creator_id,omitempty"`
    Device *Device `json:"device,omitempty"`
    DiscountMoney *V1Money `json:"discount_money,omitempty"`
    GrossSalesMoney *V1Money `json:"gross_sales_money,omitempty"`
    ID *string `json:"id,omitempty"`
    InclusiveTax []V1PaymentTax `json:"inclusive_tax,omitempty"`
    InclusiveTaxMoney *V1Money `json:"inclusive_tax_money,omitempty"`
    IsPartial *bool `json:"is_partial,omitempty"`
    Itemizations []V1PaymentItemization `json:"itemizations,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    NetSalesMoney *V1Money `json:"net_sales_money,omitempty"`
    NetTotalMoney *V1Money `json:"net_total_money,omitempty"`
    PaymentURL *string `json:"payment_url,omitempty"`
    ProcessingFeeMoney *V1Money `json:"processing_fee_money,omitempty"`
    ReceiptURL *string `json:"receipt_url,omitempty"`
    RefundedMoney *V1Money `json:"refunded_money,omitempty"`
    Refunds []V1Refund `json:"refunds,omitempty"`
    SurchargeMoney *V1Money `json:"surcharge_money,omitempty"`
    Surcharges []V1PaymentSurcharge `json:"surcharges,omitempty"`
    SwedishRoundingMoney *V1Money `json:"swedish_rounding_money,omitempty"`
    TaxMoney *V1Money `json:"tax_money,omitempty"`
    Tender []V1Tender `json:"tender,omitempty"`
    TipMoney *V1Money `json:"tip_money,omitempty"`
    TotalCollectedMoney *V1Money `json:"total_collected_money,omitempty"`
    
}

