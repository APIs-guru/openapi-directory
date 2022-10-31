package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoCreditPathParams struct {
	CreditID float64 `pathParam:"style=simple,explode=false,name=credit_id"`
	VideoID  float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoCreditSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoCreditRequest struct {
	PathParams DeleteVideoCreditPathParams
	Security   DeleteVideoCreditSecurity
}

type DeleteVideoCreditResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
