from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableCheckpointFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableCheckpointFirewallRequest:
    path_params: DisableCheckpointFirewallPathParams = field()
    security: DisableCheckpointFirewallSecurity = field()
    

@dataclass
class DisableCheckpointFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    
