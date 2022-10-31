package shared

type AssetReportCreateRequest struct {
	AccessTokens  []string                         `json:"access_tokens"`
	ClientID      *string                          `json:"client_id,omitempty"`
	DaysRequested int64                            `json:"days_requested"`
	Options       *AssetReportCreateRequestOptions `json:"options,omitempty"`
	Secret        *string                          `json:"secret,omitempty"`
}
