from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVcenterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteVcenterRequest:
    path_params: DeleteVcenterPathParams = field()
    security: DeleteVcenterSecurity = field()
    

@dataclass
class DeleteVcenterResponse:
    content_type: str = field()
    status_code: int = field()
    
