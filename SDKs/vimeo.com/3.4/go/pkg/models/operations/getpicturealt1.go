package operations

import (
	"openapi/pkg/models/shared"
)

type GetPictureAlt1PathParams struct {
	PortraitsetID float64 `pathParam:"style=simple,explode=false,name=portraitset_id"`
}

type GetPictureAlt1Request struct {
	PathParams GetPictureAlt1PathParams
}

type GetPictureAlt1Response struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
