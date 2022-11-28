package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFieldServerList = []string{
	"https://autopilot.twilio.com",
}

type CreateFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type CreateFieldCreateFieldRequest struct {
	FieldType  string `form:"name=FieldType"`
	UniqueName string `form:"name=UniqueName"`
}

type CreateFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFieldRequest struct {
	ServerURL  *string
	PathParams CreateFieldPathParams
	Request    *CreateFieldCreateFieldRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateFieldSecurity
}

type CreateFieldResponse struct {
	ContentType                   string
	StatusCode                    int64
	AutopilotV1AssistantTaskField *shared.AutopilotV1AssistantTaskField
}
