package shared

type Pagination struct {
	CurrentPage *int64 `json:"currentPage"`
	PageCount   *int64 `json:"pageCount"`
	PerPage     *int64 `json:"perPage"`
	TotalCount  *int64 `json:"totalCount"`
}
