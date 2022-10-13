package shared

type BatchRetrieveOrdersRequest struct {
	LocationID *string  `json:"location_id"`
	OrderIds   []string `json:"order_ids"`
}
