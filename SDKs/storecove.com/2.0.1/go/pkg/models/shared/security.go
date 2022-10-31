package shared

type SchemeBearer struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	Bearer SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}
