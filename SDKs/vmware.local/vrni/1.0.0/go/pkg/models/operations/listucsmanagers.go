package operations

import (
	"openapi/pkg/models/shared"
)

type ListUcsManagersSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListUcsManagersRequest struct {
	Security ListUcsManagersSecurity
}

type ListUcsManagersResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
