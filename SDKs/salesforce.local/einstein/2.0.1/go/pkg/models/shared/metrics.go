package shared

import (
	"time"
)

type Metrics struct {
	Algorithm   *string                `json:"algorithm"`
	CreatedAt   *time.Time             `json:"createdAt"`
	ID          *string                `json:"id"`
	Language    *string                `json:"language"`
	MetricsData map[string]interface{} `json:"metricsData"`
	Object      *string                `json:"object"`
}
