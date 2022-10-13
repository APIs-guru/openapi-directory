package shared

type SearchOrdersQuery struct {
	Filter *SearchOrdersFilter `json:"filter"`
	Sort   *SearchOrdersSort   `json:"sort"`
}
