from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveVideoFromProjectAlt1PathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveVideoFromProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveVideoFromProjectAlt1Request:
    path_params: RemoveVideoFromProjectAlt1PathParams = field()
    security: RemoveVideoFromProjectAlt1Security = field()
    

@dataclass
class RemoveVideoFromProjectAlt1Response:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
