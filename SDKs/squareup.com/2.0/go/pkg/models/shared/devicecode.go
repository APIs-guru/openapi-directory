package shared

type DeviceCode struct {
	Code            *string `json:"code"`
	CreatedAt       *string `json:"created_at"`
	DeviceID        *string `json:"device_id"`
	ID              *string `json:"id"`
	LocationID      *string `json:"location_id"`
	Name            *string `json:"name"`
	PairBy          *string `json:"pair_by"`
	PairedAt        *string `json:"paired_at"`
	ProductType     string  `json:"product_type"`
	Status          *string `json:"status"`
	StatusChangedAt *string `json:"status_changed_at"`
}
