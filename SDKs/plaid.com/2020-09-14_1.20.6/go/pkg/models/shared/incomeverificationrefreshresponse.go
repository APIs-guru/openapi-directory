package shared



type IncomeVerificationRefreshResponse struct {
    RequestID string `json:"request_id"`
    VerificationRefreshStatus VerificationRefreshStatusEnum `json:"verification_refresh_status"`
    
}

