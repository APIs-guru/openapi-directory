package shared

type BusinessHoursPeriod struct {
	DayOfWeek      *string `json:"day_of_week,omitempty"`
	EndLocalTime   *string `json:"end_local_time,omitempty"`
	StartLocalTime *string `json:"start_local_time,omitempty"`
}
