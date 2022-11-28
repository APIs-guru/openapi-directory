from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserTagPathParams:
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'UserId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserTagRequest:
    headers: PutUserTagHeaders = field()
    path_params: PutUserTagPathParams = field()
    

@dataclass
class PutUserTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
