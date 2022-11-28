from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field()
    

@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
