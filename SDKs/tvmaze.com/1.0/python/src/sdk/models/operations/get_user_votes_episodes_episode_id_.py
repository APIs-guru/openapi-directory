from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserVotesEpisodesEpisodeIDRequest:
    path_params: GetUserVotesEpisodesEpisodeIDPathParams = field()
    

@dataclass
class GetUserVotesEpisodesEpisodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    episode_vote: Optional[shared.EpisodeVote] = field(default=None)
    
