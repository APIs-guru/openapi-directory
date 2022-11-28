package shared

type SchemeOauth2Implicit struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauth2Code struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	Oauth2Implicit *SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *SchemeOauth2Code     `security:"scheme,type=oauth2"`
}

type SchemeAPIKey struct {
	APIKey string `security:"name=api_key"`
}
