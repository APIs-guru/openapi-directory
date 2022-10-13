package shared

type PreviewTrustedCommsBrandedChannel struct {
	AccountSid  *string                `json:"account_sid"`
	BrandSid    *string                `json:"brand_sid"`
	BusinessSid *string                `json:"business_sid"`
	Links       map[string]interface{} `json:"links"`
	Sid         *string                `json:"sid"`
	URL         *string                `json:"url"`
}
