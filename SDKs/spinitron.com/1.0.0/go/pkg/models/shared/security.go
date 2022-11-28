package shared

type SchemeHTTPBearer struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeAccessToken struct {
	APIKey string `security:"name=access-token"`
}

type Security struct {
	HTTPBearer  *SchemeHTTPBearer  `security:"scheme,type=http,subtype=bearer"`
	AccessToken *SchemeAccessToken `security:"scheme,type=apiKey,subtype=query"`
}
