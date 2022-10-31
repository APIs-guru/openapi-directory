package operations

import (
	"openapi/pkg/models/shared"
)

type GeolocatePostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type GeolocatePostRequestBody struct {
	Latitude  float64 `multipartForm:"name=latitude"`
	Location  *string `multipartForm:"name=location"`
	Longitude float64 `multipartForm:"name=longitude"`
}

type GeolocatePostRequest struct {
	PathParams GeolocatePostPathParams
	Request    GeolocatePostRequestBody `request:"mediaType=multipart/form-data"`
}

type GeolocatePostResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
