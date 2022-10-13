package shared

type ShiftWorkday struct {
	DateRange       *DateRange `json:"date_range"`
	DefaultTimezone *string    `json:"default_timezone"`
	MatchShiftsBy   *string    `json:"match_shifts_by"`
}
