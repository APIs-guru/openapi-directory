from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserEpisodesEpisodeIDPathParams:
    episode_id: int = field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserEpisodesEpisodeIDRequest:
    path_params: GetUserEpisodesEpisodeIDPathParams = field()
    

@dataclass
class GetUserEpisodesEpisodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    marked_episode: Optional[shared.MarkedEpisode] = field(default=None)
    
