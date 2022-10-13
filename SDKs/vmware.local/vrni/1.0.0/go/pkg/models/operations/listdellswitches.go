package operations

import (
	"openapi/pkg/models/shared"
)

type ListDellSwitchesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListDellSwitchesRequest struct {
	Security ListDellSwitchesSecurity
}

type ListDellSwitchesResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
