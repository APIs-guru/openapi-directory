package shared

type RetrieveInventoryCountResponse struct {
	Counts []InventoryCount `json:"counts,omitempty"`
	Cursor *string          `json:"cursor,omitempty"`
	Errors []Error          `json:"errors,omitempty"`
}
