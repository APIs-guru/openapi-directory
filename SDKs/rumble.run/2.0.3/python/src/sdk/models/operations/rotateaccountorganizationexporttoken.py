from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotateAccountOrganizationExportTokenPathParams:
    org_id: str = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotateAccountOrganizationExportTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RotateAccountOrganizationExportTokenRequest:
    path_params: RotateAccountOrganizationExportTokenPathParams = field()
    security: RotateAccountOrganizationExportTokenSecurity = field()
    

@dataclass
class RotateAccountOrganizationExportTokenResponse:
    content_type: str = field()
    status_code: int = field()
    organization: Optional[shared.Organization] = field(default=None)
    
