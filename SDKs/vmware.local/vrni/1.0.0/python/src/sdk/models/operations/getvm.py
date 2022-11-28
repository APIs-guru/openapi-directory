from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVMPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVMQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVMSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVMRequest:
    path_params: GetVMPathParams = field()
    query_params: GetVMQueryParams = field()
    security: GetVMSecurity = field()
    

@dataclass
class GetVMResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    base_virtual_machine: Optional[shared.BaseVirtualMachine] = field(default=None)
    
