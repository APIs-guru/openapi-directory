package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=exp-api-key"`
    
}

type SchemeLegacyAPIKey struct {
    APIKey string `security:"name=apiKey"`
    
}

type SecurityOption1 struct {
    APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SecurityOption2 struct {
    LegacyAPIKey SchemeLegacyAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

