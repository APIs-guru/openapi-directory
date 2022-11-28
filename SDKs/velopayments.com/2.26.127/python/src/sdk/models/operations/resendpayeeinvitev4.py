from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResendPayeeInviteV4PathParams:
    payee_id: str = field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResendPayeeInviteV4Request:
    path_params: ResendPayeeInviteV4PathParams = field()
    request: shared.InvitePayeeRequest2 = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResendPayeeInviteV4Response:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
