package shared

type DateTimeField struct {
	DurationField      *DurationField     `json:"durationField"`
	LeapDurationField  *DurationField     `json:"leapDurationField"`
	Lenient            *bool              `json:"lenient"`
	MaximumValue       *int32             `json:"maximumValue"`
	MinimumValue       *int32             `json:"minimumValue"`
	Name               *string            `json:"name"`
	RangeDurationField *DurationField     `json:"rangeDurationField"`
	Supported          *bool              `json:"supported"`
	Type               *DateTimeFieldType `json:"type"`
}
