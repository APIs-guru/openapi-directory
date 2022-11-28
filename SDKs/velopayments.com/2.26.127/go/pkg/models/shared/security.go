package shared

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	OAuth2 SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeOAuthVeloBackOffice struct {
	Authorization string `security:"name=Authorization"`
}
