package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentRatingsResponse struct {
	ContentType    string
	StatusCode     int64
	ContentRatings []shared.ContentRating
}
