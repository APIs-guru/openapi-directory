package shared

type InventoryAdjustment struct {
	AdjustmentGroup   *InventoryAdjustmentGroup `json:"adjustment_group,omitempty"`
	CatalogObjectID   *string                   `json:"catalog_object_id,omitempty"`
	CatalogObjectType *string                   `json:"catalog_object_type,omitempty"`
	CreatedAt         *string                   `json:"created_at,omitempty"`
	EmployeeID        *string                   `json:"employee_id,omitempty"`
	FromState         *string                   `json:"from_state,omitempty"`
	GoodsReceiptID    *string                   `json:"goods_receipt_id,omitempty"`
	ID                *string                   `json:"id,omitempty"`
	LocationID        *string                   `json:"location_id,omitempty"`
	OccurredAt        *string                   `json:"occurred_at,omitempty"`
	PurchaseOrderID   *string                   `json:"purchase_order_id,omitempty"`
	Quantity          *string                   `json:"quantity,omitempty"`
	ReferenceID       *string                   `json:"reference_id,omitempty"`
	RefundID          *string                   `json:"refund_id,omitempty"`
	Source            *SourceApplication        `json:"source,omitempty"`
	ToState           *string                   `json:"to_state,omitempty"`
	TotalPriceMoney   *Money                    `json:"total_price_money,omitempty"`
	TransactionID     *string                   `json:"transaction_id,omitempty"`
}
