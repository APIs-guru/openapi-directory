package shared

type Dispute struct {
	AmountMoney     *Money           `json:"amount_money"`
	BrandDisputeID  *string          `json:"brand_dispute_id"`
	CardBrand       *string          `json:"card_brand"`
	CreatedAt       *string          `json:"created_at"`
	DisputeID       *string          `json:"dispute_id"`
	DisputedPayment *DisputedPayment `json:"disputed_payment"`
	DueAt           *string          `json:"due_at"`
	EvidenceIds     []string         `json:"evidence_ids"`
	ID              *string          `json:"id"`
	LocationID      *string          `json:"location_id"`
	Reason          *string          `json:"reason"`
	ReportedAt      *string          `json:"reported_at"`
	ReportedDate    *string          `json:"reported_date"`
	State           *string          `json:"state"`
	UpdatedAt       *string          `json:"updated_at"`
	Version         *int64           `json:"version"`
}
