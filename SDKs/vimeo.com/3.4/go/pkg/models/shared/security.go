package shared

type SchemeBearer struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauth2 struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	Oauth2 SchemeOauth2 `security:"scheme,type=oauth2"`
}
