from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSecurityTagPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSecurityTagQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSecurityTagSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSecurityTagRequest:
    path_params: GetSecurityTagPathParams = field(default=None)
    query_params: GetSecurityTagQueryParams = field(default=None)
    security: GetSecurityTagSecurity = field(default=None)
    

@dataclass
class GetSecurityTagResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    security_tag: Optional[shared.SecurityTag] = field(default=None)
    status_code: int = field(default=None)
    
