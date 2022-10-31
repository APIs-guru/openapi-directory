package shared

type SchemeOauth2 struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauth2ClientSecret struct {
	APIKey string `security:"name=Authorization"`
}
