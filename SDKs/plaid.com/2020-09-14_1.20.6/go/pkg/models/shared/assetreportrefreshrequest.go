package shared

// AssetReportRefreshRequest
// AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
type AssetReportRefreshRequest struct {
	AssetReportToken string                            `json:"asset_report_token"`
	ClientID         *string                           `json:"client_id,omitempty"`
	DaysRequested    *int64                            `json:"days_requested,omitempty"`
	Options          *AssetReportRefreshRequestOptions `json:"options,omitempty"`
	Secret           *string                           `json:"secret,omitempty"`
}
