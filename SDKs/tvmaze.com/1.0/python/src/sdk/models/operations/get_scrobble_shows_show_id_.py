from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetScrobbleShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    
class GetScrobbleShowsShowIDEmbedEnum(str, Enum):
    EPISODE = "episode"


@dataclass
class GetScrobbleShowsShowIDQueryParams:
    embed: Optional[GetScrobbleShowsShowIDEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScrobbleShowsShowIDRequest:
    path_params: GetScrobbleShowsShowIDPathParams = field()
    query_params: GetScrobbleShowsShowIDQueryParams = field()
    

@dataclass
class GetScrobbleShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    marked_episodes: Optional[List[shared.MarkedEpisode]] = field(default=None)
    
