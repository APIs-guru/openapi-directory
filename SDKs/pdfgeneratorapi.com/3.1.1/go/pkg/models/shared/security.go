package shared



type SchemeJSONWebTokenAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    JSONWebTokenAuth SchemeJSONWebTokenAuth `security:"scheme,type=http,subtype=bearer"`
    
}

