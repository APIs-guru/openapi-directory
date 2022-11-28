from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostEmployeeIntoEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostEmployeeIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostEmployeeIntoEmployerRequest:
    headers: PostEmployeeIntoEmployerHeaders = field()
    path_params: PostEmployeeIntoEmployerPathParams = field()
    request: shared.Employee = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostEmployeeIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
