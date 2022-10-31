package shared



type Subscription struct {
    CanceledDate *string `json:"canceled_date,omitempty"`
    CardID *string `json:"card_id,omitempty"`
    ChargedThroughDate *string `json:"charged_through_date,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    CustomerID *string `json:"customer_id,omitempty"`
    ID *string `json:"id,omitempty"`
    InvoiceIds []string `json:"invoice_ids,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    PlanID *string `json:"plan_id,omitempty"`
    PriceOverrideMoney *Money `json:"price_override_money,omitempty"`
    StartDate *string `json:"start_date,omitempty"`
    Status *string `json:"status,omitempty"`
    TaxPercentage *string `json:"tax_percentage,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

