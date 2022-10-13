from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddEmployeePathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddEmployeeSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddEmployeeRequest:
    path_params: AddEmployeePathParams = field(default=None)
    request: shared.Employee = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddEmployeeSecurity = field(default=None)
    

@dataclass
class AddEmployeeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    employee_id_responses: Optional[List[shared.EmployeeIDResponse]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
