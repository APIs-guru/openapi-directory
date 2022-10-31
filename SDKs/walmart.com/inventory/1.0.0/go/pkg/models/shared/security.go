package shared



type SchemeBasicScheme struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    BasicScheme SchemeBasicScheme `security:"scheme,type=http,subtype=basic"`
    
}

