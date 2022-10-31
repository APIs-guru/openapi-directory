package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFeedGridSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFeedGridRequest struct {
	Security GetMyFeedGridSecurity
}

type GetMyFeedGridResponse struct {
	ContentType string
	StatusCode  int64
}
