from dataclasses import dataclass, field



@dataclass
class DeleteHpvcManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHpvcManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteHpvcManagerRequest:
    path_params: DeleteHpvcManagerPathParams = field(default=None)
    security: DeleteHpvcManagerSecurity = field(default=None)
    

@dataclass
class DeleteHpvcManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
