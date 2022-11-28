from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUserByIDV2PathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserByIDV2Request:
    path_params: GetUserByIDV2PathParams = field()
    

@dataclass
class GetUserByIDV2Response:
    content_type: str = field()
    status_code: int = field()
    user_response: Optional[shared.UserResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
