package shared

// AssetReportCreateRequest
// AssetReportCreateRequest defines the request schema for `/asset_report/create`
type AssetReportCreateRequest struct {
	AccessTokens  []string                         `json:"access_tokens"`
	ClientID      *string                          `json:"client_id,omitempty"`
	DaysRequested int64                            `json:"days_requested"`
	Options       *AssetReportCreateRequestOptions `json:"options,omitempty"`
	Secret        *string                          `json:"secret,omitempty"`
}
