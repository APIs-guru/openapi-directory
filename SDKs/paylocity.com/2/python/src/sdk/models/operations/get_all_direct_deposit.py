from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllDirectDepositPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllDirectDepositSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllDirectDepositRequest:
    path_params: GetAllDirectDepositPathParams = field()
    security: GetAllDirectDepositSecurity = field()
    

@dataclass
class GetAllDirectDepositResponse:
    content_type: str = field()
    status_code: int = field()
    direct_deposits: Optional[List[shared.DirectDeposit]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
