from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveAccountOrganizationPathParams:
    org_id: str = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountOrganizationRequest:
    path_params: RemoveAccountOrganizationPathParams = field()
    security: RemoveAccountOrganizationSecurity = field()
    

@dataclass
class RemoveAccountOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
