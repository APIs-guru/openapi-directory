from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountOrganizationPathParams:
    org_id: str = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountOrganizationRequest:
    path_params: GetAccountOrganizationPathParams = field()
    security: GetAccountOrganizationSecurity = field()
    

@dataclass
class GetAccountOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
