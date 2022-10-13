from dataclasses import dataclass, field



@dataclass
class DeletePanoramaFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeletePanoramaFirewallRequest:
    path_params: DeletePanoramaFirewallPathParams = field(default=None)
    security: DeletePanoramaFirewallSecurity = field(default=None)
    

@dataclass
class DeletePanoramaFirewallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
