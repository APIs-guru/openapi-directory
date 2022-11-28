package shared

// AssetReportRemoveRequest
// AssetReportRemoveRequest defines the request schema for `/asset_report/remove`
type AssetReportRemoveRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	ClientID         *string `json:"client_id,omitempty"`
	Secret           *string `json:"secret,omitempty"`
}
