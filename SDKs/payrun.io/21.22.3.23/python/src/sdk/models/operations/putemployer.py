from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployerRequest:
    headers: PutEmployerHeaders = field()
    path_params: PutEmployerPathParams = field()
    request: shared.Employer = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    employer: Optional[shared.Employer] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
