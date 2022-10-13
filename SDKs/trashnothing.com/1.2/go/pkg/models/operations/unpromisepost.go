package operations

import (
	"openapi/pkg/models/shared"
)

type UnpromisePostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type UnpromisePostRequest struct {
	PathParams UnpromisePostPathParams
}

type UnpromisePostResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
