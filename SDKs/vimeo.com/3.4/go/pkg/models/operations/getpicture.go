package operations

import (
	"openapi/pkg/models/shared"
)

type GetPicturePathParams struct {
	PortraitsetID float64 `pathParam:"style=simple,explode=false,name=portraitset_id"`
	UserID        float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetPictureRequest struct {
	PathParams GetPicturePathParams
}

type GetPictureResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
