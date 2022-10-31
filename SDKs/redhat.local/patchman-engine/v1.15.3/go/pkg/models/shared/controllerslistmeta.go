package shared



type ControllersListMeta struct {
    Filter map[string]ControllersFilterData `json:"filter,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    Search *string `json:"search,omitempty"`
    Sort []string `json:"sort,omitempty"`
    Subtotals map[string]int64 `json:"subtotals,omitempty"`
    TotalItems *int64 `json:"total_items,omitempty"`
    
}

