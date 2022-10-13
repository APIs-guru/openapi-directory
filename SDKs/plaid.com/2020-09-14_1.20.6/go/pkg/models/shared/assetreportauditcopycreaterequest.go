package shared

type AssetReportAuditCopyCreateRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	AuditorID        string  `json:"auditor_id"`
	ClientID         *string `json:"client_id"`
	Secret           *string `json:"secret"`
}
