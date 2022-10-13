package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSimServers = []string{
	"https://supersim.twilio.com",
}

type CreateSimRequestBodyCreateSimRequest struct {
	Iccid            string `form:"name=Iccid"`
	RegistrationCode string `form:"name=RegistrationCode"`
}

type CreateSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSimRequest struct {
	ServerURL *string
	Request   *CreateSimRequestBodyCreateSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSimSecurity
}

type CreateSimResponse struct {
	ContentType   string
	StatusCode    int64
	SupersimV1Sim *shared.SupersimV1Sim
}
