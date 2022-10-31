package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatastorePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDatastoreQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetDatastoreSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDatastoreRequest struct {
	PathParams  GetDatastorePathParams
	QueryParams GetDatastoreQueryParams
	Security    GetDatastoreSecurity
}

type GetDatastoreResponse struct {
	APIError    *shared.APIError
	ContentType string
	Datastore   *shared.Datastore
	StatusCode  int64
}
