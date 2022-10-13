package operations

import (
	"openapi/pkg/models/shared"
)

type StoryPostFileQueryParams struct {
	IncludeOutline *bool `queryParam:"style=form,explode=true,name=include_outline"`
}

type StoryPostFileRequest struct {
	QueryParams StoryPostFileQueryParams
	Request     interface{} `request:"mediaType=multipart/form-data"`
}

type StoryPostFileResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	Story         *shared.Story
}
