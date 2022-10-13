package shared

type SearchCatalogObjectsResponse struct {
	Cursor         *string         `json:"cursor"`
	Errors         []Error         `json:"errors"`
	LatestTime     *string         `json:"latest_time"`
	Objects        []CatalogObject `json:"objects"`
	RelatedObjects []CatalogObject `json:"related_objects"`
}
