package shared

type RetrieveCatalogObjectResponse struct {
	Errors         []Error         `json:"errors"`
	Object         *CatalogObject  `json:"object"`
	RelatedObjects []CatalogObject `json:"related_objects"`
}
