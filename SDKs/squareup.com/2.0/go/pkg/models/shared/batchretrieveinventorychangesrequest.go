package shared

type BatchRetrieveInventoryChangesRequest struct {
	CatalogObjectIds []string `json:"catalog_object_ids"`
	Cursor           *string  `json:"cursor"`
	LocationIds      []string `json:"location_ids"`
	States           []string `json:"states"`
	Types            []string `json:"types"`
	UpdatedAfter     *string  `json:"updated_after"`
	UpdatedBefore    *string  `json:"updated_before"`
}
