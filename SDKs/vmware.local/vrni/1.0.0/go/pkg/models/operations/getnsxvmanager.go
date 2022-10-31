package operations

import (
	"openapi/pkg/models/shared"
)

type GetNsxvManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetNsxvManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetNsxvManagerRequest struct {
	PathParams GetNsxvManagerPathParams
	Security   GetNsxvManagerSecurity
}

type GetNsxvManagerResponse struct {
	ContentType           string
	NsxvManagerDataSource *shared.NsxvManagerDataSource
	StatusCode            int64
}
