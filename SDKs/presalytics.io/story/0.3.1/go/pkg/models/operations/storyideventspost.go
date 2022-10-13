package operations

import (
	"openapi/pkg/models/shared"
)

type StoryIDEventsPostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDEventsPostRequest struct {
	PathParams StoryIDEventsPostPathParams
	Request    shared.ManageEvent `request:"mediaType=application/json"`
}

type StoryIDEventsPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	ProblemDetail                             *interface{}
	StoryIDEventsPost200ApplicationJSONObject map[string]interface{}
}
