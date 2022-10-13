package shared

import (
	"time"
)

type UpdateAttendancePeriodRequest struct {
	Break     *int32     `json:"break"`
	Comment   *string    `json:"comment"`
	Date      *time.Time `json:"date"`
	EndTime   *string    `json:"end_time"`
	StartTime *string    `json:"start_time"`
}
