package shared

// AssetReportCreateRequestOptions
// An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
type AssetReportCreateRequestOptions struct {
	ClientReportID *string                `json:"client_report_id,omitempty"`
	User           map[string]interface{} `json:"user,omitempty"`
	Webhook        *string                `json:"webhook,omitempty"`
}
