from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistributedVirtualSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistributedVirtualSwitchQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistributedVirtualSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistributedVirtualSwitchRequest:
    path_params: GetDistributedVirtualSwitchPathParams = field(default=None)
    query_params: GetDistributedVirtualSwitchQueryParams = field(default=None)
    security: GetDistributedVirtualSwitchSecurity = field(default=None)
    

@dataclass
class GetDistributedVirtualSwitchResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    distributed_virtual_switch: Optional[shared.DistributedVirtualSwitch] = field(default=None)
    status_code: int = field(default=None)
    
