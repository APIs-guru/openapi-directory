package shared

type SearchCatalogObjectsResponse struct {
	Cursor         *string         `json:"cursor,omitempty"`
	Errors         []Error         `json:"errors,omitempty"`
	LatestTime     *string         `json:"latest_time,omitempty"`
	Objects        []CatalogObject `json:"objects,omitempty"`
	RelatedObjects []CatalogObject `json:"related_objects,omitempty"`
}
