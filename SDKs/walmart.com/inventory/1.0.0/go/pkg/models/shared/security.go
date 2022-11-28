package shared

type SchemeBasicScheme struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	BasicScheme SchemeBasicScheme `security:"scheme,type=http,subtype=basic"`
}
