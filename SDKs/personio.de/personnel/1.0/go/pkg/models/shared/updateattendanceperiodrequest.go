package shared

import (
"time")

type UpdateAttendancePeriodRequest struct {
    Break *int32 `json:"break,omitempty"`
    Comment *string `json:"comment,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    EndTime *string `json:"end_time,omitempty"`
    StartTime *string `json:"start_time,omitempty"`
    
}

