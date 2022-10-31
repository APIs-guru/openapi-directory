package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocHeaders struct {
	XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
}

type CreateDocSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type CreateDocRequest struct {
	Headers  CreateDocHeaders
	Request  shared.Doc `request:"mediaType=application/json"`
	Security CreateDocSecurity
}

type CreateDocResponse struct {
	ContentType string
	StatusCode  int64
}
