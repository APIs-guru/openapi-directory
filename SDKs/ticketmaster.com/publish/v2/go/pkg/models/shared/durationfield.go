package shared

type DurationField struct {
	Name       *string            `json:"name"`
	Precise    *bool              `json:"precise"`
	Supported  *bool              `json:"supported"`
	Type       *DurationFieldType `json:"type"`
	UnitMillis *int64             `json:"unitMillis"`
}
