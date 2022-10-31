package shared

type SchemeBasicAuth struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}
