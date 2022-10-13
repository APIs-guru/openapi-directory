package shared

type AssetReportGetRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	ClientID         *string `json:"client_id"`
	IncludeInsights  *bool   `json:"include_insights"`
	Secret           *string `json:"secret"`
}
