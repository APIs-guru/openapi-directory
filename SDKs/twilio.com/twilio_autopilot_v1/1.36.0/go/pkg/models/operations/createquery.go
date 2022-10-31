package operations

import (
	"openapi/pkg/models/shared"
)

var CreateQueryServers = []string{
	"https://autopilot.twilio.com",
}

type CreateQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateQueryCreateQueryRequest struct {
	Language   string  `form:"name=Language"`
	ModelBuild *string `form:"name=ModelBuild"`
	Query      string  `form:"name=Query"`
	Tasks      *string `form:"name=Tasks"`
}

type CreateQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateQueryRequest struct {
	ServerURL  *string
	PathParams CreateQueryPathParams
	Request    *CreateQueryCreateQueryRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateQuerySecurity
}

type CreateQueryResponse struct {
	ContentType               string
	StatusCode                int64
	AutopilotV1AssistantQuery *shared.AutopilotV1AssistantQuery
}
