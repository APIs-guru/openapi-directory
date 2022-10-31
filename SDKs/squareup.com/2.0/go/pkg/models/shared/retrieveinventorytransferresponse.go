package shared

type RetrieveInventoryTransferResponse struct {
	Errors   []Error            `json:"errors,omitempty"`
	Transfer *InventoryTransfer `json:"transfer,omitempty"`
}
