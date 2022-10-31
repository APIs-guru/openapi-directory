from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserRequest:
    path_params: PutUserPathParams = field(default=None)
    headers: PutUserHeaders = field(default=None)
    

@dataclass
class PutUserResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
