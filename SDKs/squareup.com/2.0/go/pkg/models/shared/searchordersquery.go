package shared



type SearchOrdersQuery struct {
    Filter *SearchOrdersFilter `json:"filter,omitempty"`
    Sort *SearchOrdersSort `json:"sort,omitempty"`
    
}

