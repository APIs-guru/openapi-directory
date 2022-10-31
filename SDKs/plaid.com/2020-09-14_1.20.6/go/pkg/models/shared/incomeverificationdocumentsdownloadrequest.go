package shared

type IncomeVerificationDocumentsDownloadRequest struct {
	ClientID             *string `json:"client_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
	Secret               *string `json:"secret,omitempty"`
}
