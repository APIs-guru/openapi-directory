package shared

type SchemeJwt struct {
	Authorization string `security:"name=Authorization"`
}
