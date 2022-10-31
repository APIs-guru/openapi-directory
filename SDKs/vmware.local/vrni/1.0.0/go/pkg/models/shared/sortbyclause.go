package shared




type SortByClauseOrderEnum string

const (
    SortByClauseOrderEnumAsc SortByClauseOrderEnum = "ASC"
SortByClauseOrderEnumDesc SortByClauseOrderEnum = "DESC"
)


type SortByClause struct {
    Field *string `json:"field,omitempty"`
    Order *SortByClauseOrderEnum `json:"order,omitempty"`
    
}

