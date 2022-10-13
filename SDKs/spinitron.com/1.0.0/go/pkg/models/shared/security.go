package shared

type SchemeAccessToken struct {
	APIKey string `security:"name=access-token"`
}

type SchemeHTTPBearer struct {
	Authorization string `security:"name=Authorization"`
}

type SecurityOption1 struct {
	HTTPBearer SchemeHTTPBearer `security:"scheme,type=http,subtype=bearer"`
}

type SecurityOption2 struct {
	AccessToken SchemeAccessToken `security:"scheme,type=apiKey,subtype=query"`
}

type Security struct {
	Option1 *SecurityOption1 `security:"option"`
	Option2 *SecurityOption2 `security:"option"`
}
