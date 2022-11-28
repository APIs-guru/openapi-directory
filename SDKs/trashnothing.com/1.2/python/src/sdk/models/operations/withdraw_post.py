from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WithdrawPostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WithdrawPostRequest:
    path_params: WithdrawPostPathParams = field()
    

@dataclass
class WithdrawPostResponse:
    content_type: str = field()
    status_code: int = field()
    post: Optional[shared.Post] = field(default=None)
    
