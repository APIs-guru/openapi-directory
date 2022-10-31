package shared



type LocalTime struct {
    Chronology *Chronology `json:"chronology,omitempty"`
    FieldTypes []DateTimeFieldType `json:"fieldTypes,omitempty"`
    Fields []DateTimeField `json:"fields,omitempty"`
    HourOfDay *int32 `json:"hourOfDay,omitempty"`
    MillisOfDay *int32 `json:"millisOfDay,omitempty"`
    MillisOfSecond *int32 `json:"millisOfSecond,omitempty"`
    MinuteOfHour *int32 `json:"minuteOfHour,omitempty"`
    SecondOfMinute *int32 `json:"secondOfMinute,omitempty"`
    Values []int32 `json:"values,omitempty"`
    
}

