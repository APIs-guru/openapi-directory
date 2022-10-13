from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetGroupSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetGroupSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetGroupSecurity:
    option1: Optional[GetGroupSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetGroupSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetGroupSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetGroupRequest:
    path_params: GetGroupPathParams = field(default=None)
    security: GetGroupSecurity = field(default=None)
    

@dataclass
class GetGroupResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
