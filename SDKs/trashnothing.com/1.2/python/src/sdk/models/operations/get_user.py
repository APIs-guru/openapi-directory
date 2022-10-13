from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field(default=None)
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
