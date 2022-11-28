from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableVcenterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableVcenterRequest:
    path_params: EnableVcenterPathParams = field()
    security: EnableVcenterSecurity = field()
    

@dataclass
class EnableVcenterResponse:
    content_type: str = field()
    status_code: int = field()
    
