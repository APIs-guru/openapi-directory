package operations

import (
	"openapi/pkg/models/shared"
)

type StoryIDSessionPostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDSessionPostRequest struct {
	PathParams StoryIDSessionPostPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type StoryIDSessionPostResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	Session       *shared.Session
}
