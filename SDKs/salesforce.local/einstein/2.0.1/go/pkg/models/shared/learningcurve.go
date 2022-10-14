package shared

type LearningCurve struct {
	Epoch        map[string]interface{} `json:"epoch,omitempty"`
	EpochResults map[string]interface{} `json:"epochResults,omitempty"`
	MetricsData  map[string]interface{} `json:"metricsData,omitempty"`
	Object       *string                `json:"object,omitempty"`
}
