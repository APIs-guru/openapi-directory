package shared

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}
