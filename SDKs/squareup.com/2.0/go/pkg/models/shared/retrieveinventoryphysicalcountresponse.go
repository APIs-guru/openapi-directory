package shared

type RetrieveInventoryPhysicalCountResponse struct {
	Count  *InventoryPhysicalCount `json:"count"`
	Errors []Error                 `json:"errors"`
}
