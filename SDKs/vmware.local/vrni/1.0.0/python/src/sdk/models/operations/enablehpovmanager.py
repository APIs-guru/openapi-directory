from dataclasses import dataclass, field



@dataclass
class EnableHpovManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableHpovManagerRequest:
    path_params: EnableHpovManagerPathParams = field(default=None)
    security: EnableHpovManagerSecurity = field(default=None)
    

@dataclass
class EnableHpovManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
