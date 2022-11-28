from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPensionIntoEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPensionIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPensionIntoEmployerRequest:
    headers: PostPensionIntoEmployerHeaders = field()
    path_params: PostPensionIntoEmployerPathParams = field()
    request: shared.Pension = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPensionIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
