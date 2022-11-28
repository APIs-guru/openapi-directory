from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDatacenterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatacenterQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatacenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDatacenterRequest:
    path_params: GetDatacenterPathParams = field()
    query_params: GetDatacenterQueryParams = field()
    security: GetDatacenterSecurity = field()
    

@dataclass
class GetDatacenterResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    vc_datacenter: Optional[shared.VcDatacenter] = field(default=None)
    
