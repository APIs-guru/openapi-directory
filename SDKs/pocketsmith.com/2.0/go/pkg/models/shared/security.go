package shared



type SchemeDeveloperKey struct {
    APIKey string `security:"name=X-Developer-Key"`
    
}

type SchemeOauth2 struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    DeveloperKey SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
    
}

