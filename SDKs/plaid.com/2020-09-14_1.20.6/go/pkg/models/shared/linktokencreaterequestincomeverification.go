package shared

// LinkTokenCreateRequestIncomeVerification
// Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
type LinkTokenCreateRequestIncomeVerification struct {
	AssetReportID        *string `json:"asset_report_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
}
