from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployerRequest:
    path_params: PutEmployerPathParams = field(default=None)
    headers: PutEmployerHeaders = field(default=None)
    request: shared.Employer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEmployerResponse:
    content_type: str = field(default=None)
    employer: Optional[shared.Employer] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
