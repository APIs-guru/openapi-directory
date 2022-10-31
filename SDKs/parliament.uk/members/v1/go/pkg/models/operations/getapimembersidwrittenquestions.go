package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDWrittenQuestionsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDWrittenQuestionsQueryParams struct {
	Page *int32 `queryParam:"style=form,explode=true,name=page"`
}

type GetAPIMembersIDWrittenQuestionsRequest struct {
	PathParams  GetAPIMembersIDWrittenQuestionsPathParams
	QueryParams GetAPIMembersIDWrittenQuestionsQueryParams
}

type GetAPIMembersIDWrittenQuestionsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	WrittenQuestionMembersServiceSearchResult *shared.WrittenQuestionMembersServiceSearchResult
}
