from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserVotesShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserVotesShowsShowIDRequest:
    path_params: PutUserVotesShowsShowIDPathParams = field(default=None)
    request: Optional[shared.ShowVote] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUserVotesShowsShowIDResponse:
    content_type: str = field(default=None)
    show_vote: Optional[shared.ShowVote] = field(default=None)
    status_code: int = field(default=None)
    
