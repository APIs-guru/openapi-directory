package operations

import (
	"openapi/pkg/models/shared"
)

type LikeStoryPathParams struct {
	StoryID string `pathParam:"style=simple,explode=false,name=story_id"`
}

type LikeStoryQueryParams struct {
	DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
}

type LikeStoryRequest struct {
	PathParams  LikeStoryPathParams
	QueryParams LikeStoryQueryParams
}

type LikeStoryResponse struct {
	ContentType string
	StatusCode  int64
	Story       *shared.Story
}
