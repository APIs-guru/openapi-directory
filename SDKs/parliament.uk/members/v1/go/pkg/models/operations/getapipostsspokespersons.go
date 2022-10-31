package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIPostsSpokespersonsQueryParams struct {
	PartyID *int32 `queryParam:"style=form,explode=true,name=partyId"`
}

type GetAPIPostsSpokespersonsRequest struct {
	QueryParams GetAPIPostsSpokespersonsQueryParams
}

type GetAPIPostsSpokespersonsResponse struct {
	Body                          []byte
	ContentType                   string
	GovernmentOppositionPostItems []shared.GovernmentOppositionPostItem
	StatusCode                    int64
}
