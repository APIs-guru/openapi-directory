from dataclasses import dataclass, field



@dataclass
class EnableDellSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableDellSwitchRequest:
    path_params: EnableDellSwitchPathParams = field(default=None)
    security: EnableDellSwitchSecurity = field(default=None)
    

@dataclass
class EnableDellSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
