package operations

import (
	"openapi/pkg/models/shared"
)

type GetWirelessLaNsQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type GetWirelessLaNsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetWirelessLaNsRequest struct {
	QueryParams GetWirelessLaNsQueryParams
	Security    GetWirelessLaNsSecurity
}

type GetWirelessLaNsResponse struct {
	ContentType string
	StatusCode  int64
	Wirelesses  []shared.Wireless
}
