from dataclasses import dataclass, field



@dataclass
class EnableUcsManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableUcsManagerRequest:
    path_params: EnableUcsManagerPathParams = field(default=None)
    security: EnableUcsManagerSecurity = field(default=None)
    

@dataclass
class EnableUcsManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
