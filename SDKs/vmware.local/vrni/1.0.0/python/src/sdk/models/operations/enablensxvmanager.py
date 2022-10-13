from dataclasses import dataclass, field



@dataclass
class EnableNsxvManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableNsxvManagerRequest:
    path_params: EnableNsxvManagerPathParams = field(default=None)
    security: EnableNsxvManagerSecurity = field(default=None)
    

@dataclass
class EnableNsxvManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
