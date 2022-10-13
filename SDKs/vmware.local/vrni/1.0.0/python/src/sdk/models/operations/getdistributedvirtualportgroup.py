from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistributedVirtualPortgroupPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistributedVirtualPortgroupQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistributedVirtualPortgroupSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistributedVirtualPortgroupRequest:
    path_params: GetDistributedVirtualPortgroupPathParams = field(default=None)
    query_params: GetDistributedVirtualPortgroupQueryParams = field(default=None)
    security: GetDistributedVirtualPortgroupSecurity = field(default=None)
    

@dataclass
class GetDistributedVirtualPortgroupResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    distributed_virtual_portgroup: Optional[shared.DistributedVirtualPortgroup] = field(default=None)
    status_code: int = field(default=None)
    
