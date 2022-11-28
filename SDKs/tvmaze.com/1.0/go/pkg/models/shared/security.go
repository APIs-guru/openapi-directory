package shared

type SchemeUsertoken struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	Usertoken SchemeUsertoken `security:"scheme,type=http,subtype=basic"`
}
