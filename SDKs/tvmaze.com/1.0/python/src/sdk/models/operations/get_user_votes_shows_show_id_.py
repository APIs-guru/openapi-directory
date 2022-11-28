from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserVotesShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserVotesShowsShowIDRequest:
    path_params: GetUserVotesShowsShowIDPathParams = field()
    

@dataclass
class GetUserVotesShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    show_vote: Optional[shared.ShowVote] = field(default=None)
    
