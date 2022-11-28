package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUnderstandFieldValueServerList = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
}

type CreateUnderstandFieldValueCreateUnderstandFieldValueRequest struct {
	Language  string  `form:"name=Language"`
	SynonymOf *string `form:"name=SynonymOf"`
	Value     string  `form:"name=Value"`
}

type CreateUnderstandFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUnderstandFieldValueRequest struct {
	ServerURL  *string
	PathParams CreateUnderstandFieldValuePathParams
	Request    *CreateUnderstandFieldValueCreateUnderstandFieldValueRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUnderstandFieldValueSecurity
}

type CreateUnderstandFieldValueResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PreviewUnderstandAssistantFieldTypeFieldValue *shared.PreviewUnderstandAssistantFieldTypeFieldValue
}
