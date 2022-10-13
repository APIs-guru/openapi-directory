from dataclasses import dataclass, field



@dataclass
class DisableDellSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableDellSwitchRequest:
    path_params: DisableDellSwitchPathParams = field(default=None)
    security: DisableDellSwitchSecurity = field(default=None)
    

@dataclass
class DisableDellSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
