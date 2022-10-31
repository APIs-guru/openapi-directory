package shared

import (
"time")

type LogRestAPIGet struct {
    Action *string `json:"action,omitempty"`
    DashboardID *int32 `json:"dashboard_id,omitempty"`
    Dttm *time.Time `json:"dttm,omitempty"`
    DurationMs *int32 `json:"duration_ms,omitempty"`
    JSON *string `json:"json,omitempty"`
    Referrer *string `json:"referrer,omitempty"`
    SliceID *int32 `json:"slice_id,omitempty"`
    User *Meta43 `json:"user,omitempty"`
    UserID *int32 `json:"user_id,omitempty"`
    
}

