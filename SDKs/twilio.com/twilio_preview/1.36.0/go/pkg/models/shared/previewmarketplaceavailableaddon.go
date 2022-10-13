package shared

type PreviewMarketplaceAvailableAddOn struct {
	ConfigurationSchema *interface{}           `json:"configuration_schema"`
	Description         *string                `json:"description"`
	FriendlyName        *string                `json:"friendly_name"`
	Links               map[string]interface{} `json:"links"`
	PricingType         *string                `json:"pricing_type"`
	Sid                 *string                `json:"sid"`
	URL                 *string                `json:"url"`
}
