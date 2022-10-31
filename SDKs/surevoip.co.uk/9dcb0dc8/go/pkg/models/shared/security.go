package shared



type SchemeBasicAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeOAuth2 struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeOpenIDConnect struct {
    Authorization string `security:"name=Authorization"`
    
}

type SecurityOption1 struct {
    BasicAuth SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type SecurityOption2 struct {
    OAuth2 SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

