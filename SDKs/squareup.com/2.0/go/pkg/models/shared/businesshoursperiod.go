package shared

type BusinessHoursPeriod struct {
	DayOfWeek      *string `json:"day_of_week"`
	EndLocalTime   *string `json:"end_local_time"`
	StartLocalTime *string `json:"start_local_time"`
}
