from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerRequest:
    headers: GetEmployerHeaders = field()
    path_params: GetEmployerPathParams = field()
    

@dataclass
class GetEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    employer: Optional[shared.Employer] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
