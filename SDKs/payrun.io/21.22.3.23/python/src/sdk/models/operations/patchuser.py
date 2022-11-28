from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserRequest:
    headers: PatchUserHeaders = field()
    path_params: PatchUserPathParams = field()
    

@dataclass
class PatchUserResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
