package shared

// AssetReportAuditCopyCreateRequest
// AssetReportAuditCopyCreateRequest defines the request schema for `/asset_report/audit_copy/get`
type AssetReportAuditCopyCreateRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	AuditorID        string  `json:"auditor_id"`
	ClientID         *string `json:"client_id,omitempty"`
	Secret           *string `json:"secret,omitempty"`
}
