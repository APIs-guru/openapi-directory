package shared

type InventoryCount struct {
	CalculatedAt      *string `json:"calculated_at"`
	CatalogObjectID   *string `json:"catalog_object_id"`
	CatalogObjectType *string `json:"catalog_object_type"`
	IsEstimated       *bool   `json:"is_estimated"`
	LocationID        *string `json:"location_id"`
	Quantity          *string `json:"quantity"`
	State             *string `json:"state"`
}
