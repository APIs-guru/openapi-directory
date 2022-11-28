package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSimServerList = []string{
	"https://supersim.twilio.com",
}

type CreateSimCreateSimRequest struct {
	Iccid            string `form:"name=Iccid"`
	RegistrationCode string `form:"name=RegistrationCode"`
}

type CreateSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSimRequest struct {
	ServerURL *string
	Request   *CreateSimCreateSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSimSecurity
}

type CreateSimResponse struct {
	ContentType   string
	StatusCode    int64
	SupersimV1Sim *shared.SupersimV1Sim
}
