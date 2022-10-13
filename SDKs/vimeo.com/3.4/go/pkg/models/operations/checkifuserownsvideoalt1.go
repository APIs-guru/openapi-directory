package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserOwnsVideoAlt1PathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CheckIfUserOwnsVideoAlt1Request struct {
	PathParams CheckIfUserOwnsVideoAlt1PathParams
}

type CheckIfUserOwnsVideoAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
