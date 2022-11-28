from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddOrUpdateAnEmployeeEarningPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddOrUpdateAnEmployeeEarningSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddOrUpdateAnEmployeeEarningRequest:
    path_params: AddOrUpdateAnEmployeeEarningPathParams = field()
    request: shared.Earning = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateAnEmployeeEarningSecurity = field()
    

@dataclass
class AddOrUpdateAnEmployeeEarningResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    
