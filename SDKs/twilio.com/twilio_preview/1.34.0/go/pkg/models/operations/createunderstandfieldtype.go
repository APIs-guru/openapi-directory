package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUnderstandFieldTypeServers = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateUnderstandFieldTypeRequestBodyCreateUnderstandFieldTypeRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	UniqueName   string  `form:"name=UniqueName"`
}

type CreateUnderstandFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUnderstandFieldTypeRequest struct {
	ServerURL  *string
	PathParams CreateUnderstandFieldTypePathParams
	Request    *CreateUnderstandFieldTypeRequestBodyCreateUnderstandFieldTypeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUnderstandFieldTypeSecurity
}

type CreateUnderstandFieldTypeResponse struct {
	ContentType                         string
	StatusCode                          int64
	PreviewUnderstandAssistantFieldType *shared.PreviewUnderstandAssistantFieldType
}
