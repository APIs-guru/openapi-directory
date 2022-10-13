from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutScrobbleEpisodesEpisodeIDPathParams:
    episode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'episode_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutScrobbleEpisodesEpisodeIDRequest:
    path_params: PutScrobbleEpisodesEpisodeIDPathParams = field(default=None)
    request: Optional[shared.MarkedEpisode] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutScrobbleEpisodesEpisodeIDResponse:
    content_type: str = field(default=None)
    marked_episode: Optional[shared.MarkedEpisode] = field(default=None)
    status_code: int = field(default=None)
    
