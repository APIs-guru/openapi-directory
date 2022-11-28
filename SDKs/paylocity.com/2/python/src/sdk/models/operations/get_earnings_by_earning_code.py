from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEarningsByEarningCodePathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = field(metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEarningsByEarningCodeSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEarningsByEarningCodeRequest:
    path_params: GetEarningsByEarningCodePathParams = field()
    security: GetEarningsByEarningCodeSecurity = field()
    

@dataclass
class GetEarningsByEarningCodeResponse:
    content_type: str = field()
    status_code: int = field()
    earnings: Optional[List[shared.Earning]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
