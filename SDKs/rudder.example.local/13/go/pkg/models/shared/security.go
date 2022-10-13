package shared

type SchemeAPITokens struct {
	APIKey string `security:"name=X-API-Token"`
}

type Security struct {
	APITokens SchemeAPITokens `security:"scheme,type=apiKey,subtype=header"`
}
