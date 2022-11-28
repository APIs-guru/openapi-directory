from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPayCodePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPayCodeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPayCodeRequest:
    headers: PostPayCodeHeaders = field()
    path_params: PostPayCodePathParams = field()
    request: shared.PayCode = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPayCodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
