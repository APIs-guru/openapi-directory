package shared

type AssetReportCreateRequest struct {
	AccessTokens  []string                         `json:"access_tokens"`
	ClientID      *string                          `json:"client_id"`
	DaysRequested int64                            `json:"days_requested"`
	Options       *AssetReportCreateRequestOptions `json:"options"`
	Secret        *string                          `json:"secret"`
}
