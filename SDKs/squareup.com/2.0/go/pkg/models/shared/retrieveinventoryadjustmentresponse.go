package shared



type RetrieveInventoryAdjustmentResponse struct {
    Adjustment *InventoryAdjustment `json:"adjustment,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

