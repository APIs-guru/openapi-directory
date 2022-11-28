from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserFollowsShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserFollowsShowsShowIDRequest:
    path_params: PutUserFollowsShowsShowIDPathParams = field()
    

@dataclass
class PutUserFollowsShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    show_follow: Optional[shared.ShowFollow] = field(default=None)
    
