package shared

type ShiftWorkday struct {
	DateRange       *DateRange `json:"date_range,omitempty"`
	DefaultTimezone *string    `json:"default_timezone,omitempty"`
	MatchShiftsBy   *string    `json:"match_shifts_by,omitempty"`
}
