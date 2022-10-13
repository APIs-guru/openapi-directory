package shared

type BatchChangeInventoryResponse struct {
	Changes []InventoryChange `json:"changes"`
	Counts  []InventoryCount  `json:"counts"`
	Errors  []Error           `json:"errors"`
}
