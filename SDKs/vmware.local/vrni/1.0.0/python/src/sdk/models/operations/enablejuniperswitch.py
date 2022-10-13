from dataclasses import dataclass, field



@dataclass
class EnableJuniperSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableJuniperSwitchRequest:
    path_params: EnableJuniperSwitchPathParams = field(default=None)
    security: EnableJuniperSwitchSecurity = field(default=None)
    

@dataclass
class EnableJuniperSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
