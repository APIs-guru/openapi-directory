from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetScrobbleShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    
class GetScrobbleShowsShowIDEmbedEnum(str, Enum):
    EPISODE = "episode"


@dataclass
class GetScrobbleShowsShowIDQueryParams:
    embed: Optional[GetScrobbleShowsShowIDEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScrobbleShowsShowIDRequest:
    path_params: GetScrobbleShowsShowIDPathParams = field(default=None)
    query_params: GetScrobbleShowsShowIDQueryParams = field(default=None)
    

@dataclass
class GetScrobbleShowsShowIDResponse:
    content_type: str = field(default=None)
    marked_episodes: Optional[List[shared.MarkedEpisode]] = field(default=None)
    status_code: int = field(default=None)
    
