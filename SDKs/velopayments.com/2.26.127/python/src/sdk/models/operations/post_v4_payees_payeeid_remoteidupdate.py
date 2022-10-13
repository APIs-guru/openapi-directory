from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostV4PayeesPayeeIDRemoteIDUpdatePathParams:
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV4PayeesPayeeIDRemoteIDUpdateRequest:
    path_params: PostV4PayeesPayeeIDRemoteIDUpdatePathParams = field(default=None)
    request: shared.UpdateRemoteIDRequest2 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV4PayeesPayeeIDRemoteIDUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
