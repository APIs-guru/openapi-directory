from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetServiceGroupPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceGroupQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServiceGroupSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetServiceGroupRequest:
    path_params: GetServiceGroupPathParams = field()
    query_params: GetServiceGroupQueryParams = field()
    security: GetServiceGroupSecurity = field()
    

@dataclass
class GetServiceGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    
