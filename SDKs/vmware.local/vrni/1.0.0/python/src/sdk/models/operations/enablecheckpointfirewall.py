from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableCheckpointFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableCheckpointFirewallRequest:
    path_params: EnableCheckpointFirewallPathParams = field()
    security: EnableCheckpointFirewallSecurity = field()
    

@dataclass
class EnableCheckpointFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    
