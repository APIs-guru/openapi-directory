from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateEmployeePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmployeeHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmployeeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateEmployeeRequest:
    path_params: UpdateEmployeePathParams = field(default=None)
    headers: UpdateEmployeeHeaders = field(default=None)
    request: Optional[List[shared.Employee]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateEmployeeSecurity = field(default=None)
    

@dataclass
class UpdateEmployeeResponse:
    content_type: str = field(default=None)
    employees: Optional[shared.Employees] = field(default=None)
    status_code: int = field(default=None)
    
