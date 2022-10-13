from dataclasses import dataclass, field



@dataclass
class DeleteApplicationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = field(default=None)
    security: DeleteApplicationSecurity = field(default=None)
    

@dataclass
class DeleteApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
