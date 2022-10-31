package operations

import (
	"openapi/pkg/models/shared"
)

type GamesRedditReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GamesRedditReadRequest struct {
	PathParams GamesRedditReadPathParams
}

type GamesRedditReadResponse struct {
	ContentType string
	Reddit      *shared.Reddit
	StatusCode  int64
}
