package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveServicePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
}

type RemoveServiceSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type RemoveServiceRequest struct {
	PathParams RemoveServicePathParams
	Security   RemoveServiceSecurity
}

type RemoveServiceResponse struct {
	ContentType string
	StatusCode  int64
}
