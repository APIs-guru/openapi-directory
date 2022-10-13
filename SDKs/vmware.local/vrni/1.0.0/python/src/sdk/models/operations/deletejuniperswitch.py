from dataclasses import dataclass, field



@dataclass
class DeleteJuniperSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteJuniperSwitchRequest:
    path_params: DeleteJuniperSwitchPathParams = field(default=None)
    security: DeleteJuniperSwitchSecurity = field(default=None)
    

@dataclass
class DeleteJuniperSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
