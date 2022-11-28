from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeleteLocalTaxByTaxCodePathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    tax_code: str = field(metadata={'path_param': { 'field_name': 'taxCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLocalTaxByTaxCodeSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteLocalTaxByTaxCodeRequest:
    path_params: DeleteLocalTaxByTaxCodePathParams = field()
    security: DeleteLocalTaxByTaxCodeSecurity = field()
    

@dataclass
class DeleteLocalTaxByTaxCodeResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    
