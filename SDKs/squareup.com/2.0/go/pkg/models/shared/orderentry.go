package shared

type OrderEntry struct {
	LocationID *string `json:"location_id"`
	OrderID    *string `json:"order_id"`
	Version    *int64  `json:"version"`
}
