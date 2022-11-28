from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVcenterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVcenterRequest:
    path_params: GetVcenterPathParams = field()
    security: GetVcenterSecurity = field()
    

@dataclass
class GetVcenterResponse:
    content_type: str = field()
    status_code: int = field()
    v_center_data_source: Optional[shared.VCenterDataSource] = field(default=None)
    
