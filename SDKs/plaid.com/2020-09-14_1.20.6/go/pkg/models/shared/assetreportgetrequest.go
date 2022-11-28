package shared

// AssetReportGetRequest
// AssetReportGetRequest defines the request schema for `/asset_report/get`
type AssetReportGetRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	ClientID         *string `json:"client_id,omitempty"`
	IncludeInsights  *bool   `json:"include_insights,omitempty"`
	Secret           *string `json:"secret,omitempty"`
}
