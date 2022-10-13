package operations

import (
	"openapi/pkg/models/shared"
)

type EditPicturePathParams struct {
	PortraitsetID float64 `pathParam:"style=simple,explode=false,name=portraitset_id"`
	UserID        float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type EditPictureRequestBody struct {
	Active *bool `json:"active"`
}

type EditPictureSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditPictureRequest struct {
	PathParams EditPicturePathParams
	Request    *EditPictureRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   EditPictureSecurity
}

type EditPictureResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
