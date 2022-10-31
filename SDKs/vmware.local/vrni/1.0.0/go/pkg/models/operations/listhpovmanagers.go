package operations

import (
	"openapi/pkg/models/shared"
)

type ListHpovManagersSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListHpovManagersRequest struct {
	Security ListHpovManagersSecurity
}

type ListHpovManagersResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
