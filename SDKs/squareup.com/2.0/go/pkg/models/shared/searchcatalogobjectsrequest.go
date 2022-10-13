package shared

type SearchCatalogObjectsRequest struct {
	BeginTime             *string       `json:"begin_time"`
	Cursor                *string       `json:"cursor"`
	IncludeDeletedObjects *bool         `json:"include_deleted_objects"`
	IncludeRelatedObjects *bool         `json:"include_related_objects"`
	Limit                 *int64        `json:"limit"`
	ObjectTypes           []string      `json:"object_types"`
	Query                 *CatalogQuery `json:"query"`
}
