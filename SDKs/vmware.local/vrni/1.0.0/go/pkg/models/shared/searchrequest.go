package shared

type SearchRequest struct {
	Cursor     *string            `json:"cursor,omitempty"`
	EntityType *AllEntityTypeEnum `json:"entity_type,omitempty"`
	Filter     *string            `json:"filter,omitempty"`
	Size       *int32             `json:"size,omitempty"`
	SortBy     *SortByClause      `json:"sort_by,omitempty"`
	TimeRange  *TimeRange         `json:"time_range,omitempty"`
}
