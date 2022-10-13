package shared

type RetrieveInventoryCountResponse struct {
	Counts []InventoryCount `json:"counts"`
	Cursor *string          `json:"cursor"`
	Errors []Error          `json:"errors"`
}
