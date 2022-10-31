package operations

import (
	"openapi/pkg/models/shared"
)

type GamesSuggestedReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GamesSuggestedReadRequest struct {
	PathParams GamesSuggestedReadPathParams
}

type GamesSuggestedReadResponse struct {
	ContentType string
	GameSingle  *shared.GameSingle
	StatusCode  int64
}
