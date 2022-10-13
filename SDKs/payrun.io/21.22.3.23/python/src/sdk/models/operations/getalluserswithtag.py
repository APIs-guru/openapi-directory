from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllUsersWithTagPathParams:
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllUsersWithTagHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetAllUsersWithTagRequest:
    path_params: GetAllUsersWithTagPathParams = field(default=None)
    headers: GetAllUsersWithTagHeaders = field(default=None)
    

@dataclass
class GetAllUsersWithTagResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
