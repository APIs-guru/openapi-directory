from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserFollowsShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserFollowsShowsShowIDRequest:
    path_params: GetUserFollowsShowsShowIDPathParams = field()
    

@dataclass
class GetUserFollowsShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    show_follow: Optional[shared.ShowFollow] = field(default=None)
    
