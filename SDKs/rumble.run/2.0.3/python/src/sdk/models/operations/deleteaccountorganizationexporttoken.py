from dataclasses import dataclass, field



@dataclass
class DeleteAccountOrganizationExportTokenPathParams:
    org_id: str = field(default=None, metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAccountOrganizationExportTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAccountOrganizationExportTokenRequest:
    path_params: DeleteAccountOrganizationExportTokenPathParams = field(default=None)
    security: DeleteAccountOrganizationExportTokenSecurity = field(default=None)
    

@dataclass
class DeleteAccountOrganizationExportTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
