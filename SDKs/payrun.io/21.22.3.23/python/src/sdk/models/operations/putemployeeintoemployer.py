from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutEmployeeIntoEmployerPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployeeIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployeeIntoEmployerRequest:
    headers: PutEmployeeIntoEmployerHeaders = field()
    path_params: PutEmployeeIntoEmployerPathParams = field()
    request: shared.Employee = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEmployeeIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    employee: Optional[shared.Employee] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
