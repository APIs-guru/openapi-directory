package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNsxvControllerClusterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateNsxvControllerClusterSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateNsxvControllerClusterRequest struct {
	PathParams UpdateNsxvControllerClusterPathParams
	Request    *shared.NsxControllerDataCollection `request:"mediaType=application/json"`
	Security   UpdateNsxvControllerClusterSecurity
}

type UpdateNsxvControllerClusterResponse struct {
	APIError                    *shared.APIError
	ContentType                 string
	NsxControllerDataCollection *shared.NsxControllerDataCollection
	StatusCode                  int64
}
