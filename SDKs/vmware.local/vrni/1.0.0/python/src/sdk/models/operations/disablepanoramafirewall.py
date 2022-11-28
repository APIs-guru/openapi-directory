from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisablePanoramaFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisablePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisablePanoramaFirewallRequest:
    path_params: DisablePanoramaFirewallPathParams = field()
    security: DisablePanoramaFirewallSecurity = field()
    

@dataclass
class DisablePanoramaFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    
