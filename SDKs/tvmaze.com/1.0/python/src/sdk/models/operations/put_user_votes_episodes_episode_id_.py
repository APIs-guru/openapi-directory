from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserVotesEpisodesEpisodeIDPathParams:
    episode_id: int = field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserVotesEpisodesEpisodeIDRequest:
    path_params: PutUserVotesEpisodesEpisodeIDPathParams = field()
    request: Optional[shared.EpisodeVoteInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUserVotesEpisodesEpisodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    episode_vote: Optional[shared.EpisodeVote] = field(default=None)
    
