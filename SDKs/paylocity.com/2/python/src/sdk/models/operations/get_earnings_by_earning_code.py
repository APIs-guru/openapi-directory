from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEarningsByEarningCodePathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = field(default=None, metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEarningsByEarningCodeSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEarningsByEarningCodeRequest:
    path_params: GetEarningsByEarningCodePathParams = field(default=None)
    security: GetEarningsByEarningCodeSecurity = field(default=None)
    

@dataclass
class GetEarningsByEarningCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    earnings: Optional[List[shared.Earning]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
