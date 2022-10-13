from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEarningByEarningCodeAndStartDatePathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = field(default=None, metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    start_date: str = field(default=None, metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEarningByEarningCodeAndStartDateSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEarningByEarningCodeAndStartDateRequest:
    path_params: GetEarningByEarningCodeAndStartDatePathParams = field(default=None)
    security: GetEarningByEarningCodeAndStartDateSecurity = field(default=None)
    

@dataclass
class GetEarningByEarningCodeAndStartDateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    earning: Optional[shared.Earning] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
