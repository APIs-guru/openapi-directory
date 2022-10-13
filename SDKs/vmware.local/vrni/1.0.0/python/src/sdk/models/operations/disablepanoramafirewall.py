from dataclasses import dataclass, field



@dataclass
class DisablePanoramaFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisablePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisablePanoramaFirewallRequest:
    path_params: DisablePanoramaFirewallPathParams = field(default=None)
    security: DisablePanoramaFirewallSecurity = field(default=None)
    

@dataclass
class DisablePanoramaFirewallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
