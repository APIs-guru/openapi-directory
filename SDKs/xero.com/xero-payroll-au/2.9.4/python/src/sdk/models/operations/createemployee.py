from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateEmployeeHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEmployeeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateEmployeeRequest:
    headers: CreateEmployeeHeaders = field()
    request: List[shared.EmployeeInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateEmployeeSecurity = field()
    

@dataclass
class CreateEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    employees: Optional[shared.Employees] = field(default=None)
    
