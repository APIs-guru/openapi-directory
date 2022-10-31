package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=Authorization-Token"`
    
}

type Security struct {
    APIKey *SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

