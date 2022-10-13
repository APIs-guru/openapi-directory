from dataclasses import dataclass, field



@dataclass
class DisableCheckpointFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableCheckpointFirewallRequest:
    path_params: DisableCheckpointFirewallPathParams = field(default=None)
    security: DisableCheckpointFirewallSecurity = field(default=None)
    

@dataclass
class DisableCheckpointFirewallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
