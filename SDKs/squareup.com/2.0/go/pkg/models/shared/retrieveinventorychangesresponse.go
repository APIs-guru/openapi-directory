package shared

type RetrieveInventoryChangesResponse struct {
	Changes []InventoryChange `json:"changes,omitempty"`
	Cursor  *string           `json:"cursor,omitempty"`
	Errors  []Error           `json:"errors,omitempty"`
}
