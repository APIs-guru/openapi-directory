package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTextTrackPathParams struct {
	TexttrackID float64 `pathParam:"style=simple,explode=false,name=texttrack_id"`
	VideoID     float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteTextTrackSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteTextTrackRequest struct {
	PathParams DeleteTextTrackPathParams
	Security   DeleteTextTrackSecurity
}

type DeleteTextTrackResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	LegacyError *shared.LegacyError
}
