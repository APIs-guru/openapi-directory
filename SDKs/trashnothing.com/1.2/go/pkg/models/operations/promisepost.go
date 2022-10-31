package operations

import (
	"openapi/pkg/models/shared"
)

type PromisePostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type PromisePostRequest struct {
	PathParams PromisePostPathParams
}

type PromisePostResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
