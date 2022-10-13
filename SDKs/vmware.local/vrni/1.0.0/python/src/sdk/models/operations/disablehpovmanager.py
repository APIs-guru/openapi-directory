from dataclasses import dataclass, field



@dataclass
class DisableHpovManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableHpovManagerRequest:
    path_params: DisableHpovManagerPathParams = field(default=None)
    security: DisableHpovManagerSecurity = field(default=None)
    

@dataclass
class DisableHpovManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
