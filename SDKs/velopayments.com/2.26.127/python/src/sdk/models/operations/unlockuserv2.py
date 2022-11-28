from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UnlockUserV2PathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlockUserV2Request:
    path_params: UnlockUserV2PathParams = field()
    

@dataclass
class UnlockUserV2Response:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
