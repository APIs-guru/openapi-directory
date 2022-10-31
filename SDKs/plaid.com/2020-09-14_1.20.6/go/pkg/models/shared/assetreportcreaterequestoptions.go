package shared

type AssetReportCreateRequestOptions struct {
	ClientReportID *string                `json:"client_report_id,omitempty"`
	User           map[string]interface{} `json:"user,omitempty"`
	Webhook        *string                `json:"webhook,omitempty"`
}
