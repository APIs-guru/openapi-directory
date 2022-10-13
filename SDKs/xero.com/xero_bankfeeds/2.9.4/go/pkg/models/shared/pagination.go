package shared

type Pagination struct {
	ItemCount *int64 `json:"itemCount"`
	Page      *int64 `json:"page"`
	PageCount *int64 `json:"pageCount"`
	PageSize  *int64 `json:"pageSize"`
}
