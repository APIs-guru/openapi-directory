package shared

type HolidayCalendar struct {
	Label string                 `json:"label"`
	Value map[string]interface{} `json:"value"`
}
