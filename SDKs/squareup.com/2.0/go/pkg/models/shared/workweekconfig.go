package shared

type WorkweekConfig struct {
	CreatedAt           *string `json:"created_at"`
	ID                  *string `json:"id"`
	StartOfDayLocalTime string  `json:"start_of_day_local_time"`
	StartOfWeek         string  `json:"start_of_week"`
	UpdatedAt           *string `json:"updated_at"`
	Version             *int64  `json:"version"`
}
