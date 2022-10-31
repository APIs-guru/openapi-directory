package shared



type BatchRetrieveInventoryChangesResponse struct {
    Changes []InventoryChange `json:"changes,omitempty"`
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

