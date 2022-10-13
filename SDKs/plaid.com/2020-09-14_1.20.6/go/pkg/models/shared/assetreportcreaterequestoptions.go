package shared

type AssetReportCreateRequestOptions struct {
	ClientReportID *string                `json:"client_report_id"`
	User           map[string]interface{} `json:"user"`
	Webhook        *string                `json:"webhook"`
}
