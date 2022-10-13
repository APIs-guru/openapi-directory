from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCompanyEmployeesEmployeeIDPathParams:
    employee_id: int = field(default=None, metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanyEmployeesEmployeeIDRequest:
    path_params: GetCompanyEmployeesEmployeeIDPathParams = field(default=None)
    

@dataclass
class GetCompanyEmployeesEmployeeIDResponse:
    content_type: str = field(default=None)
    employee_response: Optional[shared.EmployeeResponse] = field(default=None)
    status_code: int = field(default=None)
    
