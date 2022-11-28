from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDRequest:
    path_params: GetUsersIDPathParams = field()
    

@dataclass
class GetUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
