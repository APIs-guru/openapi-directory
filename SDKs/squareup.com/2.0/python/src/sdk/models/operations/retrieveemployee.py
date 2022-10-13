from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveEmployeePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveEmployeeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveEmployeeRequest:
    path_params: RetrieveEmployeePathParams = field(default=None)
    security: RetrieveEmployeeSecurity = field(default=None)
    

@dataclass
class RetrieveEmployeeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_employee: Optional[shared.V1Employee] = field(default=None)
    
