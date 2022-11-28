from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCompanySpecificOpenAPIDocumentationPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationRequest:
    headers: GetCompanySpecificOpenAPIDocumentationHeaders = field()
    path_params: GetCompanySpecificOpenAPIDocumentationPathParams = field()
    security: GetCompanySpecificOpenAPIDocumentationSecurity = field()
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    
