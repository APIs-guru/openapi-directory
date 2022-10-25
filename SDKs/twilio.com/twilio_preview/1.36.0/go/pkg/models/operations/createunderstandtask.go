package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUnderstandTaskServers = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateUnderstandTaskCreateUnderstandTaskRequest struct {
	Actions      *interface{} `form:"name=Actions"`
	ActionsURL   *string      `form:"name=ActionsUrl"`
	FriendlyName *string      `form:"name=FriendlyName"`
	UniqueName   string       `form:"name=UniqueName"`
}

type CreateUnderstandTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUnderstandTaskRequest struct {
	ServerURL  *string
	PathParams CreateUnderstandTaskPathParams
	Request    *CreateUnderstandTaskCreateUnderstandTaskRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUnderstandTaskSecurity
}

type CreateUnderstandTaskResponse struct {
	ContentType                    string
	StatusCode                     int64
	PreviewUnderstandAssistantTask *shared.PreviewUnderstandAssistantTask
}
