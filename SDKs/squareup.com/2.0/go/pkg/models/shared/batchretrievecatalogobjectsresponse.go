package shared

type BatchRetrieveCatalogObjectsResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	Objects        []CatalogObject `json:"objects,omitempty"`
	RelatedObjects []CatalogObject `json:"related_objects,omitempty"`
}
