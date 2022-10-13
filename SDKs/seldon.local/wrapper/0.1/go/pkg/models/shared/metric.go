package shared

type Metric struct {
	Key   *string         `json:"key"`
	Type  *MetricTypeEnum `json:"type"`
	Value *float32        `json:"value"`
}
