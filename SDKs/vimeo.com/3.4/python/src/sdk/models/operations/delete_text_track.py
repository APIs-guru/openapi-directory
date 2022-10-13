from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTextTrackPathParams:
    texttrack_id: float = field(default=None, metadata={'path_param': { 'field_name': 'texttrack_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTextTrackSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTextTrackRequest:
    path_params: DeleteTextTrackPathParams = field(default=None)
    security: DeleteTextTrackSecurity = field(default=None)
    

@dataclass
class DeleteTextTrackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
