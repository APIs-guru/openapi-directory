package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserVotesShowsEmbedEnum string

const (
	GetUserVotesShowsEmbedEnumShow GetUserVotesShowsEmbedEnum = "show"
)

type GetUserVotesShowsQueryParams struct {
	Embed *GetUserVotesShowsEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
}

type GetUserVotesShowsRequest struct {
	QueryParams GetUserVotesShowsQueryParams
}

type GetUserVotesShowsResponse struct {
	ContentType string
	ShowVotes   []shared.ShowVote
	StatusCode  int64
}
