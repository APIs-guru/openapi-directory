package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetNamesRequest struct {
	Request  shared.NamesRequest `request:"mediaType=application/json"`
	Security GetNamesSecurity
}

type GetNamesResponse struct {
	ContentType   string
	NamesResponse *shared.NamesResponse
	StatusCode    int64
}
