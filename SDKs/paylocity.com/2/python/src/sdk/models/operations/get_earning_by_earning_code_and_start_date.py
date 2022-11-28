from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEarningByEarningCodeAndStartDatePathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = field(metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    start_date: str = field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEarningByEarningCodeAndStartDateSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEarningByEarningCodeAndStartDateRequest:
    path_params: GetEarningByEarningCodeAndStartDatePathParams = field()
    security: GetEarningByEarningCodeAndStartDateSecurity = field()
    

@dataclass
class GetEarningByEarningCodeAndStartDateResponse:
    content_type: str = field()
    status_code: int = field()
    earning: Optional[shared.Earning] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
