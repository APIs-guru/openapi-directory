from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RoleUpdatePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RoleUpdateRequest:
    path_params: RoleUpdatePathParams = field(default=None)
    request: shared.RoleUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RoleUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
