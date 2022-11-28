from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserEpisodesEpisodeIDPathParams:
    episode_id: int = field(metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserEpisodesEpisodeIDRequest:
    path_params: PutUserEpisodesEpisodeIDPathParams = field()
    request: Optional[shared.MarkedEpisodeInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUserEpisodesEpisodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    marked_episode: Optional[shared.MarkedEpisode] = field(default=None)
    
