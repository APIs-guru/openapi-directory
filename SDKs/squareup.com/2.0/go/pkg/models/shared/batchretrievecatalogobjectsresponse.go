package shared

type BatchRetrieveCatalogObjectsResponse struct {
	Errors         []Error         `json:"errors"`
	Objects        []CatalogObject `json:"objects"`
	RelatedObjects []CatalogObject `json:"related_objects"`
}
