from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDRequest:
    path_params: GetUsersIDPathParams = field(default=None)
    

@dataclass
class GetUsersIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
