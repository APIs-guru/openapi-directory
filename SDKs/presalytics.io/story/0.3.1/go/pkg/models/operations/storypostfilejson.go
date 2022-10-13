package operations

import (
	"openapi/pkg/models/shared"
)

type StoryPostFileJSONQueryParams struct {
	IncludeOutline *bool `queryParam:"style=form,explode=true,name=include_outline"`
}

type StoryPostFileJSONRequest struct {
	QueryParams StoryPostFileJSONQueryParams
	Request     *interface{} `request:"mediaType=application/json"`
}

type StoryPostFileJSONResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	Story         *shared.Story
}
