package shared



type SchemeBasic struct {
    APIKey string `security:"name=Authorization"`
    
}

type Security struct {
    Basic SchemeBasic `security:"scheme,type=apiKey,subtype=header"`
    
}

