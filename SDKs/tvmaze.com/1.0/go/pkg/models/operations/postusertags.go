package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserTagsRequest struct {
	Request *shared.TagInput `request:"mediaType=application/json"`
}

type PostUserTagsResponse struct {
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
