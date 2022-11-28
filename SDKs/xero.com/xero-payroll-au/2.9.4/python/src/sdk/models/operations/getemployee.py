from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployeePathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEmployeeRequest:
    headers: GetEmployeeHeaders = field()
    path_params: GetEmployeePathParams = field()
    security: GetEmployeeSecurity = field()
    

@dataclass
class GetEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    employees: Optional[shared.Employees] = field(default=None)
    
