package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandQueryServerList = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUnderstandQueryUpdateUnderstandQueryRequest struct {
	SampleSid *string `form:"name=SampleSid"`
	Status    *string `form:"name=Status"`
}

type UpdateUnderstandQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandQueryRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandQueryPathParams
	Request    *UpdateUnderstandQueryUpdateUnderstandQueryRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandQuerySecurity
}

type UpdateUnderstandQueryResponse struct {
	ContentType                     string
	StatusCode                      int64
	PreviewUnderstandAssistantQuery *shared.PreviewUnderstandAssistantQuery
}
