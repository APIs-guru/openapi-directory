from dataclasses import dataclass, field



@dataclass
class EnableCiscoSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableCiscoSwitchRequest:
    path_params: EnableCiscoSwitchPathParams = field(default=None)
    security: EnableCiscoSwitchSecurity = field(default=None)
    

@dataclass
class EnableCiscoSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
