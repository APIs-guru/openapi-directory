package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserVotesEpisodesEpisodeIDPathParams struct {
	EpisodeID int64 `pathParam:"style=simple,explode=false,name=episode_id"`
}

type GetUserVotesEpisodesEpisodeIDRequest struct {
	PathParams GetUserVotesEpisodesEpisodeIDPathParams
}

type GetUserVotesEpisodesEpisodeIDResponse struct {
	ContentType string
	EpisodeVote *shared.EpisodeVote
	StatusCode  int64
}
