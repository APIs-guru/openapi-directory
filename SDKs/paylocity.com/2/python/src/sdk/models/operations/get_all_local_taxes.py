from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllLocalTaxesPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllLocalTaxesSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllLocalTaxesRequest:
    path_params: GetAllLocalTaxesPathParams = field()
    security: GetAllLocalTaxesSecurity = field()
    

@dataclass
class GetAllLocalTaxesResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    local_taxes: Optional[List[shared.LocalTax]] = field(default=None)
    
