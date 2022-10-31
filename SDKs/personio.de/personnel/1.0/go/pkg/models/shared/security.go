package shared



type SchemeAuth struct {
    APIKey string `security:"name=Authorization"`
    
}

