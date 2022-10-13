from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDatacenterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatacenterQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatacenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDatacenterRequest:
    path_params: GetDatacenterPathParams = field(default=None)
    query_params: GetDatacenterQueryParams = field(default=None)
    security: GetDatacenterSecurity = field(default=None)
    

@dataclass
class GetDatacenterResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vc_datacenter: Optional[shared.VcDatacenter] = field(default=None)
    
