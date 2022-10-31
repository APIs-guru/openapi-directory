package operations

import (
	"openapi/pkg/models/shared"
)

type GetClusterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetClusterQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetClusterSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetClusterRequest struct {
	PathParams  GetClusterPathParams
	QueryParams GetClusterQueryParams
	Security    GetClusterSecurity
}

type GetClusterResponse struct {
	APIError    *shared.APIError
	Cluster     *shared.Cluster
	ContentType string
	StatusCode  int64
}
