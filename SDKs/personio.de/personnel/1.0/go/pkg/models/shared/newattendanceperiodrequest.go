package shared

import (
	"time"
)

type NewAttendancePeriodRequestAttendances struct {
	Break     int32     `json:"break"`
	Comment   string    `json:"comment"`
	Date      time.Time `json:"date"`
	Employee  int64     `json:"employee"`
	EndTime   string    `json:"end_time"`
	StartTime string    `json:"start_time"`
}

type NewAttendancePeriodRequest struct {
	Attendances []NewAttendancePeriodRequestAttendances `json:"attendances"`
}
