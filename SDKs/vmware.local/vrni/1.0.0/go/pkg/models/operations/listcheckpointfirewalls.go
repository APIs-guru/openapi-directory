package operations

import (
	"openapi/pkg/models/shared"
)

type ListCheckpointFirewallsSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListCheckpointFirewallsRequest struct {
	Security ListCheckpointFirewallsSecurity
}

type ListCheckpointFirewallsResponse struct {
	ContentType            string
	DataSourceListResponse *shared.DataSourceListResponse
	StatusCode             int64
}
