from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateEmployeeRoleSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateEmployeeRoleRequest:
    request: shared.V1EmployeeRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateEmployeeRoleSecurity = field(default=None)
    

@dataclass
class CreateEmployeeRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_employee_role: Optional[shared.V1EmployeeRole] = field(default=None)
    
