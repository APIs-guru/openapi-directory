package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=api_key"`
    
}

type Security struct {
    APIKey *SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

