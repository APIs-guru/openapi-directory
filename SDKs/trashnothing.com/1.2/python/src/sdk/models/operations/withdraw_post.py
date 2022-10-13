from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WithdrawPostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WithdrawPostRequest:
    path_params: WithdrawPostPathParams = field(default=None)
    

@dataclass
class WithdrawPostResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    
