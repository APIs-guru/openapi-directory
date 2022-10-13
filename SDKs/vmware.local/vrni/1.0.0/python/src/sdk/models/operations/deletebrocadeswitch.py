from dataclasses import dataclass, field



@dataclass
class DeleteBrocadeSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBrocadeSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteBrocadeSwitchRequest:
    path_params: DeleteBrocadeSwitchPathParams = field(default=None)
    security: DeleteBrocadeSwitchSecurity = field(default=None)
    

@dataclass
class DeleteBrocadeSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
