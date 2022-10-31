package shared



type RetrieveInventoryPhysicalCountResponse struct {
    Count *InventoryPhysicalCount `json:"count,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

