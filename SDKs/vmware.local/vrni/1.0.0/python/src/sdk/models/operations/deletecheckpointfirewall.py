from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteCheckpointFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteCheckpointFirewallRequest:
    path_params: DeleteCheckpointFirewallPathParams = field()
    security: DeleteCheckpointFirewallSecurity = field()
    

@dataclass
class DeleteCheckpointFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    
