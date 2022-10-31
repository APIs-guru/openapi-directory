package shared

type LinkTokenCreateRequestIncomeVerification struct {
	AssetReportID        *string `json:"asset_report_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
}
