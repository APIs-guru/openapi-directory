package shared

type SearchCatalogObjectsRequest struct {
	BeginTime             *string       `json:"begin_time,omitempty"`
	Cursor                *string       `json:"cursor,omitempty"`
	IncludeDeletedObjects *bool         `json:"include_deleted_objects,omitempty"`
	IncludeRelatedObjects *bool         `json:"include_related_objects,omitempty"`
	Limit                 *int64        `json:"limit,omitempty"`
	ObjectTypes           []string      `json:"object_types,omitempty"`
	Query                 *CatalogQuery `json:"query,omitempty"`
}
