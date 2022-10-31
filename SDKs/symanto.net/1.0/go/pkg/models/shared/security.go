package shared



type SchemeAPIKeyHeader struct {
    APIKey string `security:"name=x-api-key"`
    
}

type Security struct {
    APIKeyHeader SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
    
}

