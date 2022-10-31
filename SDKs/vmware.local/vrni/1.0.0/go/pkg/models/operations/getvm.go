package operations

import (
	"openapi/pkg/models/shared"
)

type GetVMPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVMQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetVMSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetVMRequest struct {
	PathParams  GetVMPathParams
	QueryParams GetVMQueryParams
	Security    GetVMSecurity
}

type GetVMResponse struct {
	APIError           *shared.APIError
	BaseVirtualMachine *shared.BaseVirtualMachine
	ContentType        string
	StatusCode         int64
}
