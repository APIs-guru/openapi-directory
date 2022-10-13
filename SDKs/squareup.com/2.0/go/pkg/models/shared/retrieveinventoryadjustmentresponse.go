package shared

type RetrieveInventoryAdjustmentResponse struct {
	Adjustment *InventoryAdjustment `json:"adjustment"`
	Errors     []Error              `json:"errors"`
}
