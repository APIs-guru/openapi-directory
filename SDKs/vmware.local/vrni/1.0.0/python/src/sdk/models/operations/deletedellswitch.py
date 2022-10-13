from dataclasses import dataclass, field



@dataclass
class DeleteDellSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteDellSwitchRequest:
    path_params: DeleteDellSwitchPathParams = field(default=None)
    security: DeleteDellSwitchSecurity = field(default=None)
    

@dataclass
class DeleteDellSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
