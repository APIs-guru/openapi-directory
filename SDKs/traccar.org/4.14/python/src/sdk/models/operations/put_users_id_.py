from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersIDRequest:
    path_params: PutUsersIDPathParams = field(default=None)
    request: shared.User = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
