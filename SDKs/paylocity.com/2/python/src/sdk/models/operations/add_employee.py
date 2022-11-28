from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddEmployeePathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddEmployeeSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddEmployeeRequest:
    path_params: AddEmployeePathParams = field()
    request: shared.Employee = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddEmployeeSecurity = field()
    

@dataclass
class AddEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    employee_id_responses: Optional[List[shared.EmployeeIDResponse]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
