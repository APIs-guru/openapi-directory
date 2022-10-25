package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDefaultsServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateDefaultsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type UpdateDefaultsUpdateDefaultsRequest struct {
	Defaults *interface{} `form:"name=Defaults"`
}

type UpdateDefaultsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDefaultsRequest struct {
	ServerURL  *string
	PathParams UpdateDefaultsPathParams
	Request    *UpdateDefaultsUpdateDefaultsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDefaultsSecurity
}

type UpdateDefaultsResponse struct {
	ContentType                  string
	StatusCode                   int64
	AutopilotV1AssistantDefaults *shared.AutopilotV1AssistantDefaults
}
