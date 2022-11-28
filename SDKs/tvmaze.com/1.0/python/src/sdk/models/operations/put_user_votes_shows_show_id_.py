from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserVotesShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserVotesShowsShowIDRequest:
    path_params: PutUserVotesShowsShowIDPathParams = field()
    request: Optional[shared.ShowVoteInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUserVotesShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    show_vote: Optional[shared.ShowVote] = field(default=None)
    
