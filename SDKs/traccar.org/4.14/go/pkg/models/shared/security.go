package shared

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	BasicAuth SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}
