package shared



type SchemeBearer struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    Bearer SchemeBearer `security:"scheme,type=http,subtype=bearer"`
    
}

