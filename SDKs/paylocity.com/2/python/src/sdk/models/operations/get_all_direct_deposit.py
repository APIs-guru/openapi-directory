from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllDirectDepositPathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllDirectDepositSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllDirectDepositRequest:
    path_params: GetAllDirectDepositPathParams = field(default=None)
    security: GetAllDirectDepositSecurity = field(default=None)
    

@dataclass
class GetAllDirectDepositResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    direct_deposits: Optional[List[shared.DirectDeposit]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
