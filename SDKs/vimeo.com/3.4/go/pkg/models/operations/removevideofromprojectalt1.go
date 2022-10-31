package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveVideoFromProjectAlt1PathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type RemoveVideoFromProjectAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RemoveVideoFromProjectAlt1Request struct {
	PathParams RemoveVideoFromProjectAlt1PathParams
	Security   RemoveVideoFromProjectAlt1Security
}

type RemoveVideoFromProjectAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
