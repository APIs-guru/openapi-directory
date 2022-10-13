from dataclasses import dataclass, field



@dataclass
class EnableCheckpointFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableCheckpointFirewallRequest:
    path_params: EnableCheckpointFirewallPathParams = field(default=None)
    security: EnableCheckpointFirewallSecurity = field(default=None)
    

@dataclass
class EnableCheckpointFirewallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
