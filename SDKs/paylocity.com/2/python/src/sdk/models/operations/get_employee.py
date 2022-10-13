from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEmployeePathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEmployeeRequest:
    path_params: GetEmployeePathParams = field(default=None)
    security: GetEmployeeSecurity = field(default=None)
    

@dataclass
class GetEmployeeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    employees: Optional[List[shared.Employee]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
