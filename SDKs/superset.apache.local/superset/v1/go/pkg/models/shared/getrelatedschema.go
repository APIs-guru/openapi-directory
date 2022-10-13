package shared

type GetRelatedSchema struct {
	Filter     *string `json:"filter"`
	IncludeIds []int64 `json:"include_ids"`
	Page       *int64  `json:"page"`
	PageSize   *int64  `json:"page_size"`
}
