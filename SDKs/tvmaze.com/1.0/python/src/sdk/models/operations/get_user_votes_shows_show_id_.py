from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserVotesShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserVotesShowsShowIDRequest:
    path_params: GetUserVotesShowsShowIDPathParams = field(default=None)
    

@dataclass
class GetUserVotesShowsShowIDResponse:
    content_type: str = field(default=None)
    show_vote: Optional[shared.ShowVote] = field(default=None)
    status_code: int = field(default=None)
    
