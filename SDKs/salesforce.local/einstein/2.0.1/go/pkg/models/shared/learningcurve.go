package shared

type LearningCurve struct {
	Epoch        map[string]interface{} `json:"epoch"`
	EpochResults map[string]interface{} `json:"epochResults"`
	MetricsData  map[string]interface{} `json:"metricsData"`
	Object       *string                `json:"object"`
}
