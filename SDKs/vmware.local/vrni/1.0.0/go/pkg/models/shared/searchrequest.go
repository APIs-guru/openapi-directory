package shared

type SearchRequest struct {
	Cursor     *string            `json:"cursor"`
	EntityType *AllEntityTypeEnum `json:"entity_type"`
	Filter     *string            `json:"filter"`
	Size       *int32             `json:"size"`
	SortBy     *SortByClause      `json:"sort_by"`
	TimeRange  *TimeRange         `json:"time_range"`
}
