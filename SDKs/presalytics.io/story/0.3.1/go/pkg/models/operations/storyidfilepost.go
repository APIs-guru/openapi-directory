package operations

import (
	"openapi/pkg/models/shared"
)

type StoryIDFilePostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDFilePostQueryParams struct {
	IncludeOutline  *bool   `queryParam:"style=form,explode=true,name=include_outline"`
	ObsoleteID      *string `queryParam:"style=form,explode=true,name=obsolete_id"`
	ReplaceExisting *bool   `queryParam:"style=form,explode=true,name=replace_existing"`
}

type StoryIDFilePostRequest struct {
	PathParams  StoryIDFilePostPathParams
	QueryParams StoryIDFilePostQueryParams
	Request     interface{} `request:"mediaType=multipart/form-data"`
}

type StoryIDFilePostResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	Story         *shared.Story
}
