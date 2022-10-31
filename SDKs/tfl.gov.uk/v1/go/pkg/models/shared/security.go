package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=app_key"`
    
}

type SchemeAppID struct {
    APIKey string `security:"name=app_id"`
    
}

