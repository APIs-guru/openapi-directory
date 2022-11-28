from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddOrUpdateAdditionalRatesPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddOrUpdateAdditionalRatesSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddOrUpdateAdditionalRatesRequest:
    path_params: AddOrUpdateAdditionalRatesPathParams = field()
    request: shared.AdditionalRate = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateAdditionalRatesSecurity = field()
    

@dataclass
class AddOrUpdateAdditionalRatesResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    
