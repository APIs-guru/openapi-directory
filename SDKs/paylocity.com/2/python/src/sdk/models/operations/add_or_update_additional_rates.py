from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddOrUpdateAdditionalRatesPathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddOrUpdateAdditionalRatesSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddOrUpdateAdditionalRatesRequest:
    path_params: AddOrUpdateAdditionalRatesPathParams = field(default=None)
    request: shared.AdditionalRate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateAdditionalRatesSecurity = field(default=None)
    

@dataclass
class AddOrUpdateAdditionalRatesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
