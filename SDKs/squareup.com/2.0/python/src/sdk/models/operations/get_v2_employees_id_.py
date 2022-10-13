from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV2EmployeesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV2EmployeesIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV2EmployeesIDRequest:
    path_params: GetV2EmployeesIDPathParams = field(default=None)
    security: GetV2EmployeesIDSecurity = field(default=None)
    

@dataclass
class GetV2EmployeesIDResponse:
    content_type: str = field(default=None)
    retrieve_employee_response: Optional[shared.RetrieveEmployeeResponse] = field(default=None)
    status_code: int = field(default=None)
    
