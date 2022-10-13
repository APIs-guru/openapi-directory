from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVcenterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVcenterRequest:
    path_params: GetVcenterPathParams = field(default=None)
    security: GetVcenterSecurity = field(default=None)
    

@dataclass
class GetVcenterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v_center_data_source: Optional[shared.VCenterDataSource] = field(default=None)
    
