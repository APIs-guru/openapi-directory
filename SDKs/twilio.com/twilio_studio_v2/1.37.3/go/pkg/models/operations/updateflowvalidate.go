package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFlowValidateServerList = []string{
	"https://studio.twilio.com",
}

type UpdateFlowValidateUpdateFlowValidateRequest struct {
	CommitMessage *string                           `form:"name=CommitMessage"`
	Definition    interface{}                       `form:"name=Definition"`
	FriendlyName  string                            `form:"name=FriendlyName"`
	Status        shared.FlowValidateEnumStatusEnum `form:"name=Status"`
}

type UpdateFlowValidateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFlowValidateRequest struct {
	ServerURL *string
	Request   *UpdateFlowValidateUpdateFlowValidateRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  UpdateFlowValidateSecurity
}

type UpdateFlowValidateResponse struct {
	ContentType          string
	StatusCode           int64
	StudioV2FlowValidate *shared.StudioV2FlowValidate
}
