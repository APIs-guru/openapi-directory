package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUnderstandQueryServerList = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateUnderstandQueryCreateUnderstandQueryRequest struct {
	Field      *string `form:"name=Field"`
	Language   string  `form:"name=Language"`
	ModelBuild *string `form:"name=ModelBuild"`
	Query      string  `form:"name=Query"`
	Tasks      *string `form:"name=Tasks"`
}

type CreateUnderstandQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUnderstandQueryRequest struct {
	ServerURL  *string
	PathParams CreateUnderstandQueryPathParams
	Request    *CreateUnderstandQueryCreateUnderstandQueryRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUnderstandQuerySecurity
}

type CreateUnderstandQueryResponse struct {
	ContentType                     string
	StatusCode                      int64
	PreviewUnderstandAssistantQuery *shared.PreviewUnderstandAssistantQuery
}
