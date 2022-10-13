from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetUserVotesShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclass
class GetUserVotesShowsQueryParams:
    embed: Optional[GetUserVotesShowsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserVotesShowsRequest:
    query_params: GetUserVotesShowsQueryParams = field(default=None)
    

@dataclass
class GetUserVotesShowsResponse:
    content_type: str = field(default=None)
    show_votes: Optional[List[shared.ShowVote]] = field(default=None)
    status_code: int = field(default=None)
    
