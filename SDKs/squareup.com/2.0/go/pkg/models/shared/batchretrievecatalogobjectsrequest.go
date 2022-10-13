package shared

type BatchRetrieveCatalogObjectsRequest struct {
	CatalogVersion        *int64   `json:"catalog_version"`
	IncludeRelatedObjects *bool    `json:"include_related_objects"`
	ObjectIds             []string `json:"object_ids"`
}
