package shared



type SchemeOAuth2 struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    OAuth2 SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

