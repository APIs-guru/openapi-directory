package shared

type DatabaseRelatedCharts struct {
	Count  *int32                 `json:"count"`
	Result []DatabaseRelatedChart `json:"result"`
}
