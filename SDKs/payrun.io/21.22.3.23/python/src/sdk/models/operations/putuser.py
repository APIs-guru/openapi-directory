from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserRequest:
    headers: PutUserHeaders = field()
    path_params: PutUserPathParams = field()
    

@dataclass
class PutUserResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
