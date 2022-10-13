package shared

type BatchRetrieveInventoryCountsRequest struct {
	CatalogObjectIds []string `json:"catalog_object_ids"`
	Cursor           *string  `json:"cursor"`
	LocationIds      []string `json:"location_ids"`
	States           []string `json:"states"`
	UpdatedAfter     *string  `json:"updated_after"`
}
