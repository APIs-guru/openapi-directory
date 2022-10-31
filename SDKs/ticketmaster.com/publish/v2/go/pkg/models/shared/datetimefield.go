package shared



type DateTimeField struct {
    DurationField *DurationField `json:"durationField,omitempty"`
    LeapDurationField *DurationField `json:"leapDurationField,omitempty"`
    Lenient *bool `json:"lenient,omitempty"`
    MaximumValue *int32 `json:"maximumValue,omitempty"`
    MinimumValue *int32 `json:"minimumValue,omitempty"`
    Name *string `json:"name,omitempty"`
    RangeDurationField *DurationField `json:"rangeDurationField,omitempty"`
    Supported *bool `json:"supported,omitempty"`
    Type *DateTimeFieldType `json:"type,omitempty"`
    
}

