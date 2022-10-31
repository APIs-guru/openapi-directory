package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserTagsTagIDShowsPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tag_id"`
}

type GetUserTagsTagIDShowsEmbedEnum string

const (
	GetUserTagsTagIDShowsEmbedEnumShow GetUserTagsTagIDShowsEmbedEnum = "show"
)

type GetUserTagsTagIDShowsQueryParams struct {
	Embed *GetUserTagsTagIDShowsEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
}

type GetUserTagsTagIDShowsRequest struct {
	PathParams  GetUserTagsTagIDShowsPathParams
	QueryParams GetUserTagsTagIDShowsQueryParams
}

type GetUserTagsTagIDShowsResponse struct {
	ContentType  string
	StatusCode   int64
	TagInstances []shared.TagInstance
}
