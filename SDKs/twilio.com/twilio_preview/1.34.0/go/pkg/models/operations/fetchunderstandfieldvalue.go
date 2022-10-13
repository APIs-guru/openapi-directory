package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandFieldValueServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchUnderstandFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandFieldValueRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandFieldValuePathParams
	Security   FetchUnderstandFieldValueSecurity
}

type FetchUnderstandFieldValueResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PreviewUnderstandAssistantFieldTypeFieldValue *shared.PreviewUnderstandAssistantFieldTypeFieldValue
}
