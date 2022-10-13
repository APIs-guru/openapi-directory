package shared

type DatasetMetricsPut struct {
	D3format    *string `json:"d3format"`
	Description *string `json:"description"`
	Expression  string  `json:"expression"`
	ID          *int32  `json:"id"`
	MetricName  string  `json:"metric_name"`
	MetricType  *string `json:"metric_type"`
	WarningText *string `json:"warning_text"`
}
