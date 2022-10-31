from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployeePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEmployeeRequest:
    path_params: GetEmployeePathParams = field(default=None)
    headers: GetEmployeeHeaders = field(default=None)
    security: GetEmployeeSecurity = field(default=None)
    

@dataclass
class GetEmployeeResponse:
    content_type: str = field(default=None)
    employees: Optional[shared.Employees] = field(default=None)
    status_code: int = field(default=None)
    
