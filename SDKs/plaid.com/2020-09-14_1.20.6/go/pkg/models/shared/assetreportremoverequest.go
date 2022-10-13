package shared

type AssetReportRemoveRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	ClientID         *string `json:"client_id"`
	Secret           *string `json:"secret"`
}
