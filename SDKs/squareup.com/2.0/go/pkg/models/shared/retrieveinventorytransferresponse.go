package shared

type RetrieveInventoryTransferResponse struct {
	Errors   []Error            `json:"errors"`
	Transfer *InventoryTransfer `json:"transfer"`
}
