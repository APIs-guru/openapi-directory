package operations

import (
	"openapi/pkg/models/shared"
)

type GetUploadAttemptPathParams struct {
	Upload float64 `pathParam:"style=simple,explode=false,name=upload"`
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUploadAttemptSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUploadAttemptRequest struct {
	PathParams GetUploadAttemptPathParams
	Security   GetUploadAttemptSecurity
}

type GetUploadAttemptResponse struct {
	ContentType   string
	StatusCode    int64
	UploadAttempt *shared.UploadAttempt
}
