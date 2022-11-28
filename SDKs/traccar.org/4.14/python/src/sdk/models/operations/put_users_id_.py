from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersIDRequest:
    path_params: PutUsersIDPathParams = field()
    request: shared.User = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
