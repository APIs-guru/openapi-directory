from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVnicPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVnicQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVnicSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVnicRequest:
    path_params: GetVnicPathParams = field()
    query_params: GetVnicQueryParams = field()
    security: GetVnicSecurity = field()
    

@dataclass
class GetVnicResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    base_vnic: Optional[shared.BaseVnic] = field(default=None)
    
