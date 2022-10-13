from dataclasses import dataclass, field



@dataclass
class DeleteNsxvManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteNsxvManagerRequest:
    path_params: DeleteNsxvManagerPathParams = field(default=None)
    security: DeleteNsxvManagerSecurity = field(default=None)
    

@dataclass
class DeleteNsxvManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
