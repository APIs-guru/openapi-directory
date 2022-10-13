from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserFollowsShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserFollowsShowsShowIDRequest:
    path_params: PutUserFollowsShowsShowIDPathParams = field(default=None)
    

@dataclass
class PutUserFollowsShowsShowIDResponse:
    content_type: str = field(default=None)
    show_follow: Optional[shared.ShowFollow] = field(default=None)
    status_code: int = field(default=None)
    
