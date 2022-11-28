from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistributedVirtualSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistributedVirtualSwitchQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistributedVirtualSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistributedVirtualSwitchRequest:
    path_params: GetDistributedVirtualSwitchPathParams = field()
    query_params: GetDistributedVirtualSwitchQueryParams = field()
    security: GetDistributedVirtualSwitchSecurity = field()
    

@dataclass
class GetDistributedVirtualSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    distributed_virtual_switch: Optional[shared.DistributedVirtualSwitch] = field(default=None)
    
