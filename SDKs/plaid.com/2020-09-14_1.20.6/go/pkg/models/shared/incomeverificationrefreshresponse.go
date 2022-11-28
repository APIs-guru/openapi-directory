package shared

// IncomeVerificationRefreshResponse
// IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
type IncomeVerificationRefreshResponse struct {
	RequestID                 string                        `json:"request_id"`
	VerificationRefreshStatus VerificationRefreshStatusEnum `json:"verification_refresh_status"`
}
