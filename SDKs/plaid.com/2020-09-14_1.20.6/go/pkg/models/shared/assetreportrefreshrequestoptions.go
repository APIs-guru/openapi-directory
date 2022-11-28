package shared

// AssetReportRefreshRequestOptions
// An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
type AssetReportRefreshRequestOptions struct {
	ClientReportID *string                `json:"client_report_id,omitempty"`
	User           map[string]interface{} `json:"user,omitempty"`
	Webhook        *string                `json:"webhook,omitempty"`
}
