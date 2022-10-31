package shared



type NewAttendancePeriodResponseData struct {
    ID []int64 `json:"id,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type NewAttendancePeriodResponse struct {
    Data NewAttendancePeriodResponseData `json:"data"`
    Success bool `json:"success"`
    
}

