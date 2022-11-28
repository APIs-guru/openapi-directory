package shared

// IncomeVerificationDocumentsDownloadRequest
// IncomeVerificationDocumentsDownloadRequest defines the request schema for `/income/verification/documents/download`.
type IncomeVerificationDocumentsDownloadRequest struct {
	ClientID             *string `json:"client_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
	Secret               *string `json:"secret,omitempty"`
}
