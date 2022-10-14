package shared

type TimeRange struct {
	EndTime   *int64 `json:"end_time,omitempty"`
	StartTime *int64 `json:"start_time,omitempty"`
}
