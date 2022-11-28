from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllCompanyCodesAndDescriptionsByResourcePathParams:
    code_resource: str = field(metadata={'path_param': { 'field_name': 'codeResource', 'style': 'simple', 'explode': False }})
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllCompanyCodesAndDescriptionsByResourceSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllCompanyCodesAndDescriptionsByResourceRequest:
    path_params: GetAllCompanyCodesAndDescriptionsByResourcePathParams = field()
    security: GetAllCompanyCodesAndDescriptionsByResourceSecurity = field()
    

@dataclass
class GetAllCompanyCodesAndDescriptionsByResourceResponse:
    content_type: str = field()
    status_code: int = field()
    company_codes: Optional[List[shared.CompanyCodes]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
