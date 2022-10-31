package operations

import (
	"openapi/pkg/models/shared"
)

type GetServicePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
}

type GetServiceSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetServiceRequest struct {
	PathParams GetServicePathParams
	Security   GetServiceSecurity
}

type GetServiceResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
