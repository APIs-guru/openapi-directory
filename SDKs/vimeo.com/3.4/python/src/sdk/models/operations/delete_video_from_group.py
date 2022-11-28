from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoFromGroupPathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoFromGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoFromGroupRequest:
    path_params: DeleteVideoFromGroupPathParams = field()
    security: DeleteVideoFromGroupSecurity = field()
    

@dataclass
class DeleteVideoFromGroupResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
