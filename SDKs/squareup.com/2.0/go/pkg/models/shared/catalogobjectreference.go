package shared

type CatalogObjectReference struct {
	CatalogVersion *int64  `json:"catalog_version"`
	ObjectID       *string `json:"object_id"`
}
