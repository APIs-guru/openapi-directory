package shared

type DatasetMetricsPut struct {
	D3format    *string `json:"d3format,omitempty"`
	Description *string `json:"description,omitempty"`
	Expression  string  `json:"expression"`
	ID          *int32  `json:"id,omitempty"`
	MetricName  string  `json:"metric_name"`
	MetricType  *string `json:"metric_type,omitempty"`
	WarningText *string `json:"warning_text,omitempty"`
}
