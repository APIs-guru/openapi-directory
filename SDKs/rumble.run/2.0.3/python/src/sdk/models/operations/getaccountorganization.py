from dataclasses import dataclass, field



@dataclass
class GetAccountOrganizationPathParams:
    org_id: str = field(default=None, metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountOrganizationRequest:
    path_params: GetAccountOrganizationPathParams = field(default=None)
    security: GetAccountOrganizationSecurity = field(default=None)
    

@dataclass
class GetAccountOrganizationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
