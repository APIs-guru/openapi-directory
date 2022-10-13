package operations

import (
	"openapi/pkg/models/shared"
)

type ProvideFeedbackRequestBody struct {
	Document      *string `multipartForm:"name=document"`
	ExpectedLabel *string `multipartForm:"name=expectedLabel"`
	ModelID       *string `multipartForm:"name=modelId"`
	Name          *string `multipartForm:"name=name"`
}

type ProvideFeedbackSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type ProvideFeedbackRequest struct {
	Request  *ProvideFeedbackRequestBody `request:"mediaType=multipart/form-data"`
	Security ProvideFeedbackSecurity
}

type ProvideFeedbackResponse struct {
	ContentType string
	Example     *shared.Example
	StatusCode  int64
}
