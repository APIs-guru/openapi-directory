package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateExecutionServerList = []string{
	"https://studio.twilio.com",
}

type UpdateExecutionPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateExecutionUpdateExecutionRequest struct {
	Status shared.ExecutionEnumStatusEnum `form:"name=Status"`
}

type UpdateExecutionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateExecutionRequest struct {
	ServerURL  *string
	PathParams UpdateExecutionPathParams
	Request    *UpdateExecutionUpdateExecutionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateExecutionSecurity
}

type UpdateExecutionResponse struct {
	ContentType           string
	StatusCode            int64
	StudioV1FlowExecution *shared.StudioV1FlowExecution
}
