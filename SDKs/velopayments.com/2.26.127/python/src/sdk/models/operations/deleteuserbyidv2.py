from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteUserByIDV2PathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserByIDV2Request:
    path_params: DeleteUserByIDV2PathParams = field(default=None)
    

@dataclass
class DeleteUserByIDV2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
