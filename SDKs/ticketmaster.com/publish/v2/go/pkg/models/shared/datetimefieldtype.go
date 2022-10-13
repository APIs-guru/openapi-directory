package shared

type DateTimeFieldType struct {
	DurationType      *DurationFieldType `json:"durationType"`
	Name              *string            `json:"name"`
	RangeDurationType *DurationFieldType `json:"rangeDurationType"`
}
