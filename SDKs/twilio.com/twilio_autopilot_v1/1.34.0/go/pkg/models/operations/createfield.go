package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFieldServers = []string{
	"https://autopilot.twilio.com",
}

type CreateFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type CreateFieldRequestBodyCreateFieldRequest struct {
	FieldType  string `form:"name=FieldType"`
	UniqueName string `form:"name=UniqueName"`
}

type CreateFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFieldRequest struct {
	ServerURL  *string
	PathParams CreateFieldPathParams
	Request    *CreateFieldRequestBodyCreateFieldRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateFieldSecurity
}

type CreateFieldResponse struct {
	ContentType                   string
	StatusCode                    int64
	AutopilotV1AssistantTaskField *shared.AutopilotV1AssistantTaskField
}
