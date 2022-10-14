package shared

type WorkweekConfig struct {
	CreatedAt           *string `json:"created_at,omitempty"`
	ID                  *string `json:"id,omitempty"`
	StartOfDayLocalTime string  `json:"start_of_day_local_time"`
	StartOfWeek         string  `json:"start_of_week"`
	UpdatedAt           *string `json:"updated_at,omitempty"`
	Version             *int64  `json:"version,omitempty"`
}
