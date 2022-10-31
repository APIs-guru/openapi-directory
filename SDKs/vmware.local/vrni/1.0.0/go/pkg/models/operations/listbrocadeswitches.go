package operations

import (
	"openapi/pkg/models/shared"
)

type ListBrocadeSwitchesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListBrocadeSwitchesRequest struct {
	Security ListBrocadeSwitchesSecurity
}

type ListBrocadeSwitchesResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
