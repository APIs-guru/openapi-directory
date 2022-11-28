from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeletePanoramaFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeletePanoramaFirewallRequest:
    path_params: DeletePanoramaFirewallPathParams = field()
    security: DeletePanoramaFirewallSecurity = field()
    

@dataclass
class DeletePanoramaFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    
