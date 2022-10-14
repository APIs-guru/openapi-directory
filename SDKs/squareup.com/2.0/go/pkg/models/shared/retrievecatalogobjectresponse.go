package shared

type RetrieveCatalogObjectResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	Object         *CatalogObject  `json:"object,omitempty"`
	RelatedObjects []CatalogObject `json:"related_objects,omitempty"`
}
