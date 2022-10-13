from dataclasses import dataclass, field



@dataclass
class DeleteUcsManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUcsManagerRequest:
    path_params: DeleteUcsManagerPathParams = field(default=None)
    security: DeleteUcsManagerSecurity = field(default=None)
    

@dataclass
class DeleteUcsManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
