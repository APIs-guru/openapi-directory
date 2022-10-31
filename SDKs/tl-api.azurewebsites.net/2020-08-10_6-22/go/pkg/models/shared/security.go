package shared



type SchemeApikey struct {
    APIKey string `security:"name=Ocp-Apim-Subscription-Key"`
    
}

type SchemeBearer struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    Bearer SchemeBearer `security:"scheme,type=oauth2"`
    
}

