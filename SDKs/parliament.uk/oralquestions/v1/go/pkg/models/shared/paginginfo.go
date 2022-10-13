package shared

type PagingInfo struct {
	Skip         *int32        `json:"Skip"`
	StatusCounts []StatusCount `json:"StatusCounts"`
	Take         *int32        `json:"Take"`
	Total        *int32        `json:"Total"`
}
