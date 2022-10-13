from dataclasses import dataclass, field



@dataclass
class EnablePanoramaFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnablePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnablePanoramaFirewallRequest:
    path_params: EnablePanoramaFirewallPathParams = field(default=None)
    security: EnablePanoramaFirewallSecurity = field(default=None)
    

@dataclass
class EnablePanoramaFirewallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
