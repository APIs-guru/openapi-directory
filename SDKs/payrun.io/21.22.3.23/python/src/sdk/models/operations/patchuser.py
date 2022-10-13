from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PatchUserRequest:
    path_params: PatchUserPathParams = field(default=None)
    headers: PatchUserHeaders = field(default=None)
    

@dataclass
class PatchUserResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
