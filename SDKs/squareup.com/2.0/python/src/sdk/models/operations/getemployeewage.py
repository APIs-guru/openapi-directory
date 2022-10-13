from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployeeWagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeWageSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEmployeeWageRequest:
    path_params: GetEmployeeWagePathParams = field(default=None)
    security: GetEmployeeWageSecurity = field(default=None)
    

@dataclass
class GetEmployeeWageResponse:
    content_type: str = field(default=None)
    get_employee_wage_response: Optional[shared.GetEmployeeWageResponse] = field(default=None)
    status_code: int = field(default=None)
    
