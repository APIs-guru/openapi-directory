package shared

type SchemeAPIKey struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
