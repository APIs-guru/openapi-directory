package operations

import (
	"openapi/pkg/models/shared"
)

type GetClicksQueryParams struct {
	ContinueFrom *string `queryParam:"style=form,explode=true,name=continueFrom"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type GetClicksSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetClicksRequest struct {
	QueryParams GetClicksQueryParams
	Security    GetClicksSecurity
}

type GetClicksResponse struct {
	ContentType    string
	GetClicksModel *shared.GetClicksModel
	StatusCode     int64
}
