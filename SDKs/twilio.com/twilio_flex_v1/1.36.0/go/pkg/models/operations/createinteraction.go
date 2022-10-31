package operations

import (
	"openapi/pkg/models/shared"
)

var CreateInteractionServers = []string{
	"https://flex-api.twilio.com",
}

type CreateInteractionCreateInteractionRequest struct {
	Channel interface{} `form:"name=Channel"`
	Routing interface{} `form:"name=Routing"`
}

type CreateInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateInteractionRequest struct {
	ServerURL *string
	Request   *CreateInteractionCreateInteractionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateInteractionSecurity
}

type CreateInteractionResponse struct {
	ContentType       string
	StatusCode        int64
	FlexV1Interaction *shared.FlexV1Interaction
}
