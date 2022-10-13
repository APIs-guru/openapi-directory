from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserVotesEpisodesEpisodeIDRequest:
    path_params: GetUserVotesEpisodesEpisodeIDPathParams = field(default=None)
    

@dataclass
class GetUserVotesEpisodesEpisodeIDResponse:
    content_type: str = field(default=None)
    episode_vote: Optional[shared.EpisodeVote] = field(default=None)
    status_code: int = field(default=None)
    
