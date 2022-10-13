package shared

type ShiftWage struct {
	HourlyRate *Money  `json:"hourly_rate"`
	Title      *string `json:"title"`
}
