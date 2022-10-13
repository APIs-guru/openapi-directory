package shared

type ControllersListMeta struct {
	Filter     map[string]ControllersFilterData `json:"filter"`
	Limit      *int64                           `json:"limit"`
	Offset     *int64                           `json:"offset"`
	Search     *string                          `json:"search"`
	Sort       []string                         `json:"sort"`
	Subtotals  map[string]int64                 `json:"subtotals"`
	TotalItems *int64                           `json:"total_items"`
}
