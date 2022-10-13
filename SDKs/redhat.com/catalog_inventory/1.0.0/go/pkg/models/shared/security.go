package shared

type SchemeUserSecurity struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	UserSecurity SchemeUserSecurity `security:"scheme,type=http,subtype=basic"`
}
