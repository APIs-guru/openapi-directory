package shared

type BusinessHours struct {
	Periods []BusinessHoursPeriod `json:"periods,omitempty"`
}
