from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCompanySpecificOpenAPIDocumentationPathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationRequest:
    path_params: GetCompanySpecificOpenAPIDocumentationPathParams = field(default=None)
    headers: GetCompanySpecificOpenAPIDocumentationHeaders = field(default=None)
    security: GetCompanySpecificOpenAPIDocumentationSecurity = field(default=None)
    

@dataclass
class GetCompanySpecificOpenAPIDocumentationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
