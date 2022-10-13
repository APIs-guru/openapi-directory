package shared

type InventoryAdjustment struct {
	AdjustmentGroup   *InventoryAdjustmentGroup `json:"adjustment_group"`
	CatalogObjectID   *string                   `json:"catalog_object_id"`
	CatalogObjectType *string                   `json:"catalog_object_type"`
	CreatedAt         *string                   `json:"created_at"`
	EmployeeID        *string                   `json:"employee_id"`
	FromState         *string                   `json:"from_state"`
	GoodsReceiptID    *string                   `json:"goods_receipt_id"`
	ID                *string                   `json:"id"`
	LocationID        *string                   `json:"location_id"`
	OccurredAt        *string                   `json:"occurred_at"`
	PurchaseOrderID   *string                   `json:"purchase_order_id"`
	Quantity          *string                   `json:"quantity"`
	ReferenceID       *string                   `json:"reference_id"`
	RefundID          *string                   `json:"refund_id"`
	Source            *SourceApplication        `json:"source"`
	ToState           *string                   `json:"to_state"`
	TotalPriceMoney   *Money                    `json:"total_price_money"`
	TransactionID     *string                   `json:"transaction_id"`
}
