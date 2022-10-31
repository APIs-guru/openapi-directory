package shared

type DateTimeFieldType struct {
	DurationType      *DurationFieldType `json:"durationType,omitempty"`
	Name              *string            `json:"name,omitempty"`
	RangeDurationType *DurationFieldType `json:"rangeDurationType,omitempty"`
}
