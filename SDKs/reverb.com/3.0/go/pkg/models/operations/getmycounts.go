package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyCountsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyCountsRequest struct {
	Security GetMyCountsSecurity
}

type GetMyCountsResponse struct {
	ContentType string
	StatusCode  int64
}
