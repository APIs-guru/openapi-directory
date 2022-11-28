from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserEpisodesQueryParams:
    show_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserEpisodesRequest:
    query_params: GetUserEpisodesQueryParams = field()
    

@dataclass
class GetUserEpisodesResponse:
    content_type: str = field()
    status_code: int = field()
    marked_episodes: Optional[List[shared.MarkedEpisode]] = field(default=None)
    
