from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVmknicPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVmknicQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVmknicSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVmknicRequest:
    path_params: GetVmknicPathParams = field(default=None)
    query_params: GetVmknicQueryParams = field(default=None)
    security: GetVmknicSecurity = field(default=None)
    

@dataclass
class GetVmknicResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vmknic: Optional[shared.Vmknic] = field(default=None)
    
