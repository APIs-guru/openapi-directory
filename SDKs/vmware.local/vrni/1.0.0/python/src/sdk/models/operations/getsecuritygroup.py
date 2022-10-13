from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSecurityGroupPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSecurityGroupQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSecurityGroupSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSecurityGroupRequest:
    path_params: GetSecurityGroupPathParams = field(default=None)
    query_params: GetSecurityGroupQueryParams = field(default=None)
    security: GetSecurityGroupSecurity = field(default=None)
    

@dataclass
class GetSecurityGroupResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    base_security_group: Optional[shared.BaseSecurityGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
