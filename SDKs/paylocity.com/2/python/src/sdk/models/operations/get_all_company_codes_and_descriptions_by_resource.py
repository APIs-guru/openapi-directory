from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllCompanyCodesAndDescriptionsByResourcePathParams:
    code_resource: str = field(default=None, metadata={'path_param': { 'field_name': 'codeResource', 'style': 'simple', 'explode': False }})
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllCompanyCodesAndDescriptionsByResourceSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllCompanyCodesAndDescriptionsByResourceRequest:
    path_params: GetAllCompanyCodesAndDescriptionsByResourcePathParams = field(default=None)
    security: GetAllCompanyCodesAndDescriptionsByResourceSecurity = field(default=None)
    

@dataclass
class GetAllCompanyCodesAndDescriptionsByResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    company_codes: Optional[List[shared.CompanyCodes]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
