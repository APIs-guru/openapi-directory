from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateVcenterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateVcenterRequest:
    path_params: UpdateVcenterPathParams = field(default=None)
    request: Optional[shared.VCenterDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateVcenterSecurity = field(default=None)
    

@dataclass
class UpdateVcenterResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v_center_data_source: Optional[shared.VCenterDataSource] = field(default=None)
    
