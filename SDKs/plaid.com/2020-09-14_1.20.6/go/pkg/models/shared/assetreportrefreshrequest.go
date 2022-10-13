package shared

type AssetReportRefreshRequest struct {
	AssetReportToken string                            `json:"asset_report_token"`
	ClientID         *string                           `json:"client_id"`
	DaysRequested    *int64                            `json:"days_requested"`
	Options          *AssetReportRefreshRequestOptions `json:"options"`
	Secret           *string                           `json:"secret"`
}
