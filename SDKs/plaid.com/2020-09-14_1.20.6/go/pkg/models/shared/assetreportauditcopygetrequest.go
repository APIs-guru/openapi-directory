package shared

// AssetReportAuditCopyGetRequest
// AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get`
type AssetReportAuditCopyGetRequest struct {
	AuditCopyToken string  `json:"audit_copy_token"`
	ClientID       *string `json:"client_id,omitempty"`
	Secret         *string `json:"secret,omitempty"`
}
