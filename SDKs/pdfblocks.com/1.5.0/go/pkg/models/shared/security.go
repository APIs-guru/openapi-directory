package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=X-Api-Key"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}
