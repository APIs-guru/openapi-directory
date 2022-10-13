package shared

type DatasetRelatedCharts struct {
	Count  *int32                `json:"count"`
	Result []DatasetRelatedChart `json:"result"`
}
