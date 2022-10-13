package shared

type NewAttendancePeriodResponseData struct {
	ID      []int64 `json:"id"`
	Message *string `json:"message"`
}

type NewAttendancePeriodResponse struct {
	Data    NewAttendancePeriodResponseData `json:"data"`
	Success bool                            `json:"success"`
}
