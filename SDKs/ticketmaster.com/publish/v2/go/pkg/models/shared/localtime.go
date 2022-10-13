package shared

type LocalTime struct {
	Chronology     *Chronology         `json:"chronology"`
	FieldTypes     []DateTimeFieldType `json:"fieldTypes"`
	Fields         []DateTimeField     `json:"fields"`
	HourOfDay      *int32              `json:"hourOfDay"`
	MillisOfDay    *int32              `json:"millisOfDay"`
	MillisOfSecond *int32              `json:"millisOfSecond"`
	MinuteOfHour   *int32              `json:"minuteOfHour"`
	SecondOfMinute *int32              `json:"secondOfMinute"`
	Values         []int32             `json:"values"`
}
