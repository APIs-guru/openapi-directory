from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGroupPathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteGroupRequest:
    path_params: DeleteGroupPathParams = field()
    security: DeleteGroupSecurity = field()
    

@dataclass
class DeleteGroupResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
