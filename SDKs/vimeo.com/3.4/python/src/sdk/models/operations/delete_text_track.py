from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTextTrackPathParams:
    texttrack_id: float = field(metadata={'path_param': { 'field_name': 'texttrack_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTextTrackSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTextTrackRequest:
    path_params: DeleteTextTrackPathParams = field()
    security: DeleteTextTrackSecurity = field()
    

@dataclass
class DeleteTextTrackResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
