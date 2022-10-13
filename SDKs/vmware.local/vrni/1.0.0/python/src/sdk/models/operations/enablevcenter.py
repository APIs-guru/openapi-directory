from dataclasses import dataclass, field



@dataclass
class EnableVcenterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableVcenterRequest:
    path_params: EnableVcenterPathParams = field(default=None)
    security: EnableVcenterSecurity = field(default=None)
    

@dataclass
class EnableVcenterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
