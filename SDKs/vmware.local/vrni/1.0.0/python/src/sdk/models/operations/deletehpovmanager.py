from dataclasses import dataclass, field



@dataclass
class DeleteHpovManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteHpovManagerRequest:
    path_params: DeleteHpovManagerPathParams = field(default=None)
    security: DeleteHpovManagerSecurity = field(default=None)
    

@dataclass
class DeleteHpovManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
