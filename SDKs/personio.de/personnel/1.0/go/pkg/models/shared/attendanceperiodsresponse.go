package shared

import (
	"time"
)

type AttendancePeriodsResponseDataAttributes struct {
	Break       int64     `json:"break"`
	Comment     string    `json:"comment"`
	Date        time.Time `json:"date"`
	Employee    int64     `json:"employee"`
	EndTime     string    `json:"end_time"`
	IsHoliday   bool      `json:"is_holiday"`
	IsOnTimeOff bool      `json:"is_on_time_off"`
	StartTime   string    `json:"start_time"`
}

type AttendancePeriodsResponseData struct {
	Attributes []AttendancePeriodsResponseDataAttributes `json:"attributes"`
	ID         int64                                     `json:"id"`
	Type       string                                    `json:"type"`
}

type AttendancePeriodsResponse struct {
	Data    []AttendancePeriodsResponseData `json:"data"`
	Limit   *int64                          `json:"limit"`
	Offset  *int64                          `json:"offset"`
	Success bool                            `json:"success"`
}
