package operations

import (
	"openapi/pkg/models/shared"
)

type GamesTwitchReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GamesTwitchReadRequest struct {
	PathParams GamesTwitchReadPathParams
}

type GamesTwitchReadResponse struct {
	ContentType string
	StatusCode  int64
	Twitch      *shared.Twitch
}
