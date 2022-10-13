from dataclasses import dataclass, field



@dataclass
class DisableVcenterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableVcenterRequest:
    path_params: DisableVcenterPathParams = field(default=None)
    security: DisableVcenterSecurity = field(default=None)
    

@dataclass
class DisableVcenterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
