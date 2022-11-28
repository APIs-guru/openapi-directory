package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFieldTypeServerList = []string{
	"https://autopilot.twilio.com",
}

type CreateFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateFieldTypeCreateFieldTypeRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	UniqueName   string  `form:"name=UniqueName"`
}

type CreateFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFieldTypeRequest struct {
	ServerURL  *string
	PathParams CreateFieldTypePathParams
	Request    *CreateFieldTypeCreateFieldTypeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateFieldTypeSecurity
}

type CreateFieldTypeResponse struct {
	ContentType                   string
	StatusCode                    int64
	AutopilotV1AssistantFieldType *shared.AutopilotV1AssistantFieldType
}
