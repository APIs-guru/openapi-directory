from dataclasses import dataclass, field



@dataclass
class DisableJuniperSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableJuniperSwitchRequest:
    path_params: DisableJuniperSwitchPathParams = field(default=None)
    security: DisableJuniperSwitchSecurity = field(default=None)
    

@dataclass
class DisableJuniperSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
