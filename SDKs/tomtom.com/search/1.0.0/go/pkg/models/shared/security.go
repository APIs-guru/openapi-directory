package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=key"`
}

type Security struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}
