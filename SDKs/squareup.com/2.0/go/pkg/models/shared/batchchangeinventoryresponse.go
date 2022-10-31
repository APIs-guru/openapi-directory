package shared



type BatchChangeInventoryResponse struct {
    Changes []InventoryChange `json:"changes,omitempty"`
    Counts []InventoryCount `json:"counts,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

