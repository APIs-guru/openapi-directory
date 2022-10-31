package shared



type JobAssignment struct {
    AnnualRate *Money `json:"annual_rate,omitempty"`
    HourlyRate *Money `json:"hourly_rate,omitempty"`
    JobTitle string `json:"job_title"`
    PayType string `json:"pay_type"`
    WeeklyHours *int64 `json:"weekly_hours,omitempty"`
    
}

