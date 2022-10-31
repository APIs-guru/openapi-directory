package shared



type Metric struct {
    Key *string `json:"key,omitempty"`
    Type *MetricTypeEnum `json:"type,omitempty"`
    Value *float32 `json:"value,omitempty"`
    
}

