package shared

type PreviewMarketplaceAvailableAddOn struct {
	ConfigurationSchema *interface{}           `json:"configuration_schema,omitempty"`
	Description         *string                `json:"description,omitempty"`
	FriendlyName        *string                `json:"friendly_name,omitempty"`
	Links               map[string]interface{} `json:"links,omitempty"`
	PricingType         *string                `json:"pricing_type,omitempty"`
	Sid                 *string                `json:"sid,omitempty"`
	URL                 *string                `json:"url,omitempty"`
}
