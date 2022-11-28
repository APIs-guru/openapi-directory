package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandFieldTypeServerList = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	UniqueName   *string `form:"name=UniqueName"`
}

type UpdateUnderstandFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandFieldTypeRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandFieldTypePathParams
	Request    *UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandFieldTypeSecurity
}

type UpdateUnderstandFieldTypeResponse struct {
	ContentType                         string
	StatusCode                          int64
	PreviewUnderstandAssistantFieldType *shared.PreviewUnderstandAssistantFieldType
}
