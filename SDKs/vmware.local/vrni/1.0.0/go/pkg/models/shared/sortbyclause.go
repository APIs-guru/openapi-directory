package shared

type SortByClauseOrderEnum string

const (
	SortByClauseOrderEnumAsc  SortByClauseOrderEnum = "ASC"
	SortByClauseOrderEnumDesc SortByClauseOrderEnum = "DESC"
)

type SortByClause struct {
	Field *string                `json:"field"`
	Order *SortByClauseOrderEnum `json:"order"`
}
