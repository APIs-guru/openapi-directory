package shared

type BatchRetrieveInventoryCountsResponse struct {
	Counts []InventoryCount `json:"counts"`
	Cursor *string          `json:"cursor"`
	Errors []Error          `json:"errors"`
}
