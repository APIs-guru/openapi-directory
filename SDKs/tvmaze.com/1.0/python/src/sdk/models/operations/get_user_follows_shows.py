from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetUserFollowsShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclass
class GetUserFollowsShowsQueryParams:
    embed: Optional[GetUserFollowsShowsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsShowsRequest:
    query_params: GetUserFollowsShowsQueryParams = field(default=None)
    

@dataclass
class GetUserFollowsShowsResponse:
    content_type: str = field(default=None)
    show_follows: Optional[List[shared.ShowFollow]] = field(default=None)
    status_code: int = field(default=None)
    
