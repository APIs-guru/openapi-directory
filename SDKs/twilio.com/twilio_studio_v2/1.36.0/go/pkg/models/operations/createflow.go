package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFlowServers = []string{
	"https://studio.twilio.com",
}

type CreateFlowRequestBodyCreateFlowRequest struct {
	CommitMessage *string                   `form:"name=CommitMessage"`
	Definition    interface{}               `form:"name=Definition"`
	FriendlyName  string                    `form:"name=FriendlyName"`
	Status        shared.FlowEnumStatusEnum `form:"name=Status"`
}

type CreateFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFlowRequest struct {
	ServerURL *string
	Request   *CreateFlowRequestBodyCreateFlowRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateFlowSecurity
}

type CreateFlowResponse struct {
	ContentType  string
	StatusCode   int64
	StudioV2Flow *shared.StudioV2Flow
}
