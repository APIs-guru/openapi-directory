package shared

import (
"time")

type Metrics struct {
    Algorithm *string `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ID *string `json:"id,omitempty"`
    Language *string `json:"language,omitempty"`
    MetricsData map[string]interface{} `json:"metricsData,omitempty"`
    Object *string `json:"object,omitempty"`
    
}

