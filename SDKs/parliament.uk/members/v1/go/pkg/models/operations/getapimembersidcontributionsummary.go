package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDContributionSummaryPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDContributionSummaryQueryParams struct {
	Page *int32 `queryParam:"style=form,explode=true,name=page"`
}

type GetAPIMembersIDContributionSummaryRequest struct {
	PathParams  GetAPIMembersIDContributionSummaryPathParams
	QueryParams GetAPIMembersIDContributionSummaryQueryParams
}

type GetAPIMembersIDContributionSummaryResponse struct {
	Body                                         []byte
	ContentType                                  string
	DebateContributionMembersServiceSearchResult *shared.DebateContributionMembersServiceSearchResult
	StatusCode                                   int64
}
