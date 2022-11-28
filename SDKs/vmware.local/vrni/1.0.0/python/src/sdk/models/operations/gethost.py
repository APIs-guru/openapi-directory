from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHostQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHostSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHostRequest:
    path_params: GetHostPathParams = field()
    query_params: GetHostQueryParams = field()
    security: GetHostSecurity = field()
    

@dataclass
class GetHostResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    host: Optional[shared.Host] = field(default=None)
    
