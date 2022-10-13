from dataclasses import dataclass, field



@dataclass
class DeleteAristaSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAristaSwitchRequest:
    path_params: DeleteAristaSwitchPathParams = field(default=None)
    security: DeleteAristaSwitchSecurity = field(default=None)
    

@dataclass
class DeleteAristaSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
