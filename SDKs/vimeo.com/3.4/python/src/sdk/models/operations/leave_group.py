from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LeaveGroupPathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaveGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LeaveGroupRequest:
    path_params: LeaveGroupPathParams = field()
    security: LeaveGroupSecurity = field()
    

@dataclass
class LeaveGroupResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
