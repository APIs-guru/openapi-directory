package shared

// AssetReportAuditCopyRemoveRequest
// AssetReportAuditCopyRemoveRequest defines the request schema for `/asset_report/audit_copy/remove`
type AssetReportAuditCopyRemoveRequest struct {
	AuditCopyToken string  `json:"audit_copy_token"`
	ClientID       *string `json:"client_id,omitempty"`
	Secret         *string `json:"secret,omitempty"`
}
