package operations

import (
	"openapi/pkg/models/shared"
)

type SearchEntitiesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type SearchEntitiesRequest struct {
	Request  *shared.SearchRequest `request:"mediaType=application/json"`
	Security SearchEntitiesSecurity
}

type SearchEntitiesResponse struct {
	APIError                  *shared.APIError
	ContentType               string
	PagedListResponseWithTime *shared.PagedListResponseWithTime
	StatusCode                int64
}
