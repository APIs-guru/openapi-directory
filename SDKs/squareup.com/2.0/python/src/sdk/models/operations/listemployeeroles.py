from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListEmployeeRolesQueryParams:
    batch_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'batch_token', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEmployeeRolesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListEmployeeRolesRequest:
    query_params: ListEmployeeRolesQueryParams = field(default=None)
    security: ListEmployeeRolesSecurity = field(default=None)
    

@dataclass
class ListEmployeeRolesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_employee_roles: Optional[List[shared.V1EmployeeRole]] = field(default=None)
    
