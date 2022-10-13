from dataclasses import dataclass, field



@dataclass
class DisableAristaSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableAristaSwitchRequest:
    path_params: DisableAristaSwitchPathParams = field(default=None)
    security: DisableAristaSwitchSecurity = field(default=None)
    

@dataclass
class DisableAristaSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
