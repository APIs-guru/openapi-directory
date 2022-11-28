from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetUserFollowsShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclass
class GetUserFollowsShowsQueryParams:
    embed: Optional[GetUserFollowsShowsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsShowsRequest:
    query_params: GetUserFollowsShowsQueryParams = field()
    

@dataclass
class GetUserFollowsShowsResponse:
    content_type: str = field()
    status_code: int = field()
    show_follows: Optional[List[shared.ShowFollow]] = field(default=None)
    
