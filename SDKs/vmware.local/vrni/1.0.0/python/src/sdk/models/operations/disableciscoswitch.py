from dataclasses import dataclass, field



@dataclass
class DisableCiscoSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableCiscoSwitchRequest:
    path_params: DisableCiscoSwitchPathParams = field(default=None)
    security: DisableCiscoSwitchSecurity = field(default=None)
    

@dataclass
class DisableCiscoSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
