from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveVideoFromProjectPathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveVideoFromProjectSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveVideoFromProjectRequest:
    path_params: RemoveVideoFromProjectPathParams = field()
    security: RemoveVideoFromProjectSecurity = field()
    

@dataclass
class RemoveVideoFromProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
