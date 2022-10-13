package operations

import (
	"openapi/pkg/models/shared"
)

type ListAristaSwitchesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListAristaSwitchesRequest struct {
	Security ListAristaSwitchesSecurity
}

type ListAristaSwitchesResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
