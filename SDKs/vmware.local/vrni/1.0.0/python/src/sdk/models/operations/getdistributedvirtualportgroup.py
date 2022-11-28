from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistributedVirtualPortgroupPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistributedVirtualPortgroupQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistributedVirtualPortgroupSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistributedVirtualPortgroupRequest:
    path_params: GetDistributedVirtualPortgroupPathParams = field()
    query_params: GetDistributedVirtualPortgroupQueryParams = field()
    security: GetDistributedVirtualPortgroupSecurity = field()
    

@dataclass
class GetDistributedVirtualPortgroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    distributed_virtual_portgroup: Optional[shared.DistributedVirtualPortgroup] = field(default=None)
    
