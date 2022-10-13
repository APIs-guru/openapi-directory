package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateQueryServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateQueryRequestBodyUpdateQueryRequest struct {
	SampleSid *string `form:"name=SampleSid"`
	Status    *string `form:"name=Status"`
}

type UpdateQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateQueryRequest struct {
	ServerURL  *string
	PathParams UpdateQueryPathParams
	Request    *UpdateQueryRequestBodyUpdateQueryRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateQuerySecurity
}

type UpdateQueryResponse struct {
	ContentType               string
	StatusCode                int64
	AutopilotV1AssistantQuery *shared.AutopilotV1AssistantQuery
}
