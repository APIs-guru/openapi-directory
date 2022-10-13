from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEmployeeRolePathParams:
    role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmployeeRoleSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateEmployeeRoleRequest:
    path_params: UpdateEmployeeRolePathParams = field(default=None)
    request: shared.V1EmployeeRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateEmployeeRoleSecurity = field(default=None)
    

@dataclass
class UpdateEmployeeRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_employee_role: Optional[shared.V1EmployeeRole] = field(default=None)
    
