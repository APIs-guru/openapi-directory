package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFlowServers = []string{
	"https://studio.twilio.com",
}

type UpdateFlowPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateFlowUpdateFlowRequest struct {
	CommitMessage *string                   `form:"name=CommitMessage"`
	Definition    *interface{}              `form:"name=Definition"`
	FriendlyName  *string                   `form:"name=FriendlyName"`
	Status        shared.FlowEnumStatusEnum `form:"name=Status"`
}

type UpdateFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFlowRequest struct {
	ServerURL  *string
	PathParams UpdateFlowPathParams
	Request    *UpdateFlowUpdateFlowRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateFlowSecurity
}

type UpdateFlowResponse struct {
	ContentType  string
	StatusCode   int64
	StudioV2Flow *shared.StudioV2Flow
}
