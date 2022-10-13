package operations

import (
	"openapi/pkg/models/shared"
)

type ListVcentersSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListVcentersRequest struct {
	Security ListVcentersSecurity
}

type ListVcentersResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
