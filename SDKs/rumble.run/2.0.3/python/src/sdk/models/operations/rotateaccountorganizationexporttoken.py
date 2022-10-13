from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotateAccountOrganizationExportTokenPathParams:
    org_id: str = field(default=None, metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotateAccountOrganizationExportTokenSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RotateAccountOrganizationExportTokenRequest:
    path_params: RotateAccountOrganizationExportTokenPathParams = field(default=None)
    security: RotateAccountOrganizationExportTokenSecurity = field(default=None)
    

@dataclass
class RotateAccountOrganizationExportTokenResponse:
    content_type: str = field(default=None)
    organization: Optional[shared.Organization] = field(default=None)
    status_code: int = field(default=None)
    
