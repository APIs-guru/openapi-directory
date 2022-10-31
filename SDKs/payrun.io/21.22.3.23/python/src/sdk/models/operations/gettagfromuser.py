from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagFromUserPathParams:
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromUserHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromUserRequest:
    path_params: GetTagFromUserPathParams = field(default=None)
    headers: GetTagFromUserHeaders = field(default=None)
    

@dataclass
class GetTagFromUserResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
