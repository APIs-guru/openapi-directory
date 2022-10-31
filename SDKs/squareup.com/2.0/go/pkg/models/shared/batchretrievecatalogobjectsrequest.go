package shared

type BatchRetrieveCatalogObjectsRequest struct {
	CatalogVersion        *int64   `json:"catalog_version,omitempty"`
	IncludeRelatedObjects *bool    `json:"include_related_objects,omitempty"`
	ObjectIds             []string `json:"object_ids"`
}
