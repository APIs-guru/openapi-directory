package operations

import (
	"openapi/pkg/models/shared"
)

type StoryIDCollaboratorsInactivePostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDCollaboratorsInactivePostRequest struct {
	PathParams StoryIDCollaboratorsInactivePostPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type StoryIDCollaboratorsInactivePostResponse struct {
	ContentType       string
	StatusCode        int64
	ProblemDetail     *interface{}
	StoryCollaborator *shared.StoryCollaborator
}
