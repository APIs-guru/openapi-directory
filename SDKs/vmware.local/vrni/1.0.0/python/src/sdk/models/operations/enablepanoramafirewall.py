from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnablePanoramaFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnablePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnablePanoramaFirewallRequest:
    path_params: EnablePanoramaFirewallPathParams = field()
    security: EnablePanoramaFirewallSecurity = field()
    

@dataclass
class EnablePanoramaFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    
