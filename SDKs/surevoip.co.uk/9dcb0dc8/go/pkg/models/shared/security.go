package shared

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	BasicAuth *SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
	OAuth2    *SchemeOAuth2    `security:"scheme,type=oauth2"`
}

type SchemeOpenIDConnect struct {
	Authorization string `security:"name=Authorization"`
}
