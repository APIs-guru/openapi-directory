from dataclasses import dataclass, field



@dataclass
class EnableAristaSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableAristaSwitchRequest:
    path_params: EnableAristaSwitchPathParams = field(default=None)
    security: EnableAristaSwitchSecurity = field(default=None)
    

@dataclass
class EnableAristaSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
