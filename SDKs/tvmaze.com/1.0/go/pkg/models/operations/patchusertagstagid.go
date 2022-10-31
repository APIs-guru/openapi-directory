package operations

import (
	"openapi/pkg/models/shared"
)

type PatchUserTagsTagIDPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tag_id"`
}

type PatchUserTagsTagIDRequest struct {
	PathParams PatchUserTagsTagIDPathParams
	Request    *shared.Tag `request:"mediaType=application/json"`
}

type PatchUserTagsTagIDResponse struct {
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
