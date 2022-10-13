from dataclasses import dataclass, field



@dataclass
class DisableNsxvManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableNsxvManagerRequest:
    path_params: DisableNsxvManagerPathParams = field(default=None)
    security: DisableNsxvManagerSecurity = field(default=None)
    

@dataclass
class DisableNsxvManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
