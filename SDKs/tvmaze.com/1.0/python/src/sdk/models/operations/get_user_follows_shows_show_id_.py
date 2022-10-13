from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserFollowsShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserFollowsShowsShowIDRequest:
    path_params: GetUserFollowsShowsShowIDPathParams = field(default=None)
    

@dataclass
class GetUserFollowsShowsShowIDResponse:
    content_type: str = field(default=None)
    show_follow: Optional[shared.ShowFollow] = field(default=None)
    status_code: int = field(default=None)
    
