from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVcenterManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVcenterManagerQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVcenterManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVcenterManagerRequest:
    path_params: GetVcenterManagerPathParams = field()
    query_params: GetVcenterManagerQueryParams = field()
    security: GetVcenterManagerSecurity = field()
    

@dataclass
class GetVcenterManagerResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    v_center_manager: Optional[shared.VCenterManager] = field(default=None)
    
