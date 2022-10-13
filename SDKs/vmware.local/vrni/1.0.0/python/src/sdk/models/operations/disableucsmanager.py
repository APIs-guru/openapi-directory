from dataclasses import dataclass, field



@dataclass
class DisableUcsManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableUcsManagerRequest:
    path_params: DisableUcsManagerPathParams = field(default=None)
    security: DisableUcsManagerSecurity = field(default=None)
    

@dataclass
class DisableUcsManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
