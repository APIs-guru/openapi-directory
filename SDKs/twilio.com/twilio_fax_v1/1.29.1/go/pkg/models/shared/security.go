package shared

type SchemeAccountSidAuthToken struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
