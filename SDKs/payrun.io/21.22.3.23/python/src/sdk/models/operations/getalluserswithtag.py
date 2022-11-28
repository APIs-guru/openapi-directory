from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllUsersWithTagPathParams:
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllUsersWithTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllUsersWithTagRequest:
    headers: GetAllUsersWithTagHeaders = field()
    path_params: GetAllUsersWithTagPathParams = field()
    

@dataclass
class GetAllUsersWithTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
