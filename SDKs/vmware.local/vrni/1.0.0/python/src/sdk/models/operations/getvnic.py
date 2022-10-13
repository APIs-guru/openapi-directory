from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVnicPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVnicQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVnicSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVnicRequest:
    path_params: GetVnicPathParams = field(default=None)
    query_params: GetVnicQueryParams = field(default=None)
    security: GetVnicSecurity = field(default=None)
    

@dataclass
class GetVnicResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    base_vnic: Optional[shared.BaseVnic] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
