from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllEarningsPathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllEarningsSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllEarningsRequest:
    path_params: GetAllEarningsPathParams = field(default=None)
    security: GetAllEarningsSecurity = field(default=None)
    

@dataclass
class GetAllEarningsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    earnings: Optional[List[shared.Earning]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
