package shared



type SchemeAPIKeyHeader struct {
    APIKey string `security:"name=Ocp-Apim-Subscription-Key"`
    
}

type SchemeAPIKeyQuery struct {
    APIKey string `security:"name=key"`
    
}

type SecurityOption1 struct {
    APIKeyHeader SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
    
}

type SecurityOption2 struct {
    APIKeyQuery SchemeAPIKeyQuery `security:"scheme,type=apiKey,subtype=query"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

