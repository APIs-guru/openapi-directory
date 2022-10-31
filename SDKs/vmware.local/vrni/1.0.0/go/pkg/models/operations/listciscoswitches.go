package operations

import (
	"openapi/pkg/models/shared"
)

type ListCiscoSwitchesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListCiscoSwitchesRequest struct {
	Security ListCiscoSwitchesSecurity
}

type ListCiscoSwitchesResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
