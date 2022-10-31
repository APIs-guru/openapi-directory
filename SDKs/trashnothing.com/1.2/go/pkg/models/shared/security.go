package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=api_key"`
    
}

type SchemeOauth2Code struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeOauth2Implicit struct {
    Authorization string `security:"name=Authorization"`
    
}

type SecurityOption1 struct {
    Oauth2Implicit SchemeOauth2Implicit `security:"scheme,type=oauth2"`
    
}

type SecurityOption2 struct {
    Oauth2Code SchemeOauth2Code `security:"scheme,type=oauth2"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

