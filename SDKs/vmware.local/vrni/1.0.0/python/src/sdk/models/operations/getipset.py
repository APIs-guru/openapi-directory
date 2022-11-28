from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIPSetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPSetQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIPSetSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetIPSetRequest:
    path_params: GetIPSetPathParams = field()
    query_params: GetIPSetQueryParams = field()
    security: GetIPSetSecurity = field()
    

@dataclass
class GetIPSetResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    base_ip_set: Optional[shared.BaseIPSet] = field(default=None)
    
