package shared



type Dispute struct {
    AmountMoney *Money `json:"amount_money,omitempty"`
    BrandDisputeID *string `json:"brand_dispute_id,omitempty"`
    CardBrand *string `json:"card_brand,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    DisputeID *string `json:"dispute_id,omitempty"`
    DisputedPayment *DisputedPayment `json:"disputed_payment,omitempty"`
    DueAt *string `json:"due_at,omitempty"`
    EvidenceIds []string `json:"evidence_ids,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ReportedAt *string `json:"reported_at,omitempty"`
    ReportedDate *string `json:"reported_date,omitempty"`
    State *string `json:"state,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

