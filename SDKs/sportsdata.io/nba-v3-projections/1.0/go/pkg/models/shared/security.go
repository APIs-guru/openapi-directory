package shared

type SchemeAPIKeyHeader struct {
	APIKey string `security:"name=Ocp-Apim-Subscription-Key"`
}

type SchemeAPIKeyQuery struct {
	APIKey string `security:"name=key"`
}

type Security struct {
	APIKeyHeader *SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
	APIKeyQuery  *SchemeAPIKeyQuery  `security:"scheme,type=apiKey,subtype=query"`
}
