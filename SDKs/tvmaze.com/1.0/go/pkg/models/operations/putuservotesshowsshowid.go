package operations

import (
	"openapi/pkg/models/shared"
)

type PutUserVotesShowsShowIDPathParams struct {
	ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
}

type PutUserVotesShowsShowIDRequest struct {
	PathParams PutUserVotesShowsShowIDPathParams
	Request    *shared.ShowVote `request:"mediaType=application/json"`
}

type PutUserVotesShowsShowIDResponse struct {
	ContentType string
	ShowVote    *shared.ShowVote
	StatusCode  int64
}
