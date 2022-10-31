package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventOpRsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventOpRsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventOpRsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventOpRsRequest struct {
	PathParams GetEventOpRsPathParams
	Headers    GetEventOpRsHeaders
	Security   GetEventOpRsSecurity
}

type GetEventOpRsResponse struct {
	ContentType string
	EventOpRs   *shared.EventOpRs
	Headers     map[string][]string
	StatusCode  int64
}
