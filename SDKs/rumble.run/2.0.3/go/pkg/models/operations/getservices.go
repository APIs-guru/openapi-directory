package operations

import (
	"openapi/pkg/models/shared"
)

type GetServicesQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type GetServicesSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetServicesRequest struct {
	QueryParams GetServicesQueryParams
	Security    GetServicesSecurity
}

type GetServicesResponse struct {
	ContentType string
	Services    []shared.Service
	StatusCode  int64
}
