package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=X-API-Key"`
}

type Security struct {
	APIKeyAuth SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}
