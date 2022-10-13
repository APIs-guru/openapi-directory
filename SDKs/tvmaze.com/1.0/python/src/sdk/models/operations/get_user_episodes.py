from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserEpisodesQueryParams:
    show_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserEpisodesRequest:
    query_params: GetUserEpisodesQueryParams = field(default=None)
    

@dataclass
class GetUserEpisodesResponse:
    content_type: str = field(default=None)
    marked_episodes: Optional[List[shared.MarkedEpisode]] = field(default=None)
    status_code: int = field(default=None)
    
