package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFollowsSearchSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFollowsSearchRequest struct {
	Security GetMyFollowsSearchSecurity
}

type GetMyFollowsSearchResponse struct {
	ContentType string
	StatusCode  int64
}
