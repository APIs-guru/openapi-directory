package shared



type SchemeUsertoken struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    Usertoken SchemeUsertoken `security:"scheme,type=http,subtype=basic"`
    
}

