package shared

import (
	"time"
)

type CreateTimeOffPeriodRequest struct {
	Comment       *string   `json:"comment,omitempty"`
	EmployeeID    int64     `json:"employee_id"`
	EndDate       time.Time `json:"end_date"`
	HalfDayEnd    bool      `json:"half_day_end"`
	HalfDayStart  bool      `json:"half_day_start"`
	StartDate     time.Time `json:"start_date"`
	TimeOffTypeID int64     `json:"time_off_type_id"`
}
