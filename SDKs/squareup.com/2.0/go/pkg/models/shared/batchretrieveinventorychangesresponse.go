package shared

type BatchRetrieveInventoryChangesResponse struct {
	Changes []InventoryChange `json:"changes"`
	Cursor  *string           `json:"cursor"`
	Errors  []Error           `json:"errors"`
}
