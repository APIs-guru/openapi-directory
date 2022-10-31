from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateEmployeeHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEmployeeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateEmployeeRequest:
    headers: CreateEmployeeHeaders = field(default=None)
    request: List[shared.Employee] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateEmployeeSecurity = field(default=None)
    

@dataclass
class CreateEmployeeResponse:
    content_type: str = field(default=None)
    employees: Optional[shared.Employees] = field(default=None)
    status_code: int = field(default=None)
    
