from dataclasses import dataclass, field



@dataclass
class DeleteCiscoSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteCiscoSwitchRequest:
    path_params: DeleteCiscoSwitchPathParams = field(default=None)
    security: DeleteCiscoSwitchSecurity = field(default=None)
    

@dataclass
class DeleteCiscoSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
