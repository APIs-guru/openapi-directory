from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAccountOrganizationExportTokenPathParams:
    org_id: str = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAccountOrganizationExportTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAccountOrganizationExportTokenRequest:
    path_params: DeleteAccountOrganizationExportTokenPathParams = field()
    security: DeleteAccountOrganizationExportTokenSecurity = field()
    

@dataclass
class DeleteAccountOrganizationExportTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
