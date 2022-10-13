from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAccountOrganizationPathParams:
    org_id: str = field(default=None, metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccountOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAccountOrganizationRequest:
    path_params: UpdateAccountOrganizationPathParams = field(default=None)
    request: shared.OrgOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountOrganizationSecurity = field(default=None)
    

@dataclass
class UpdateAccountOrganizationResponse:
    content_type: str = field(default=None)
    organization: Optional[shared.Organization] = field(default=None)
    status_code: int = field(default=None)
    
