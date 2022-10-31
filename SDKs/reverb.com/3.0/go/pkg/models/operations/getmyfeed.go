package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFeedSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFeedRequest struct {
	Security GetMyFeedSecurity
}

type GetMyFeedResponse struct {
	ContentType string
	StatusCode  int64
}
