from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserVotesEpisodesEpisodeIDRequest:
    path_params: PutUserVotesEpisodesEpisodeIDPathParams = field(default=None)
    request: Optional[shared.EpisodeVote] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUserVotesEpisodesEpisodeIDResponse:
    content_type: str = field(default=None)
    episode_vote: Optional[shared.EpisodeVote] = field(default=None)
    status_code: int = field(default=None)
    
