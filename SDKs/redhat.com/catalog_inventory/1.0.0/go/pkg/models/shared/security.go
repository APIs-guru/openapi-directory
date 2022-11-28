package shared

type SchemeUserSecurity struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	UserSecurity SchemeUserSecurity `security:"scheme,type=http,subtype=basic"`
}
