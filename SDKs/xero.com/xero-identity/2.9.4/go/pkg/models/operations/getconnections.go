package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectionsQueryParams struct {
	AuthEventID *string `queryParam:"style=form,explode=true,name=authEventId"`
}

type GetConnectionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetConnectionsRequest struct {
	QueryParams GetConnectionsQueryParams
	Security    GetConnectionsSecurity
}

type GetConnectionsResponse struct {
	Connections []interface{}
	ContentType string
	StatusCode  int64
}
