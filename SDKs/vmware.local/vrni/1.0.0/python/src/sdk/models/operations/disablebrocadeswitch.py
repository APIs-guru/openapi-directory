from dataclasses import dataclass, field



@dataclass
class DisableBrocadeSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableBrocadeSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableBrocadeSwitchRequest:
    path_params: DisableBrocadeSwitchPathParams = field(default=None)
    security: DisableBrocadeSwitchSecurity = field(default=None)
    

@dataclass
class DisableBrocadeSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
