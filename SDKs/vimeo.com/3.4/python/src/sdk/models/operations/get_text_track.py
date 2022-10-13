from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTextTrackPathParams:
    texttrack_id: float = field(default=None, metadata={'path_param': { 'field_name': 'texttrack_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTextTrackRequest:
    path_params: GetTextTrackPathParams = field(default=None)
    

@dataclass
class GetTextTrackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    text_track: Optional[shared.TextTrack] = field(default=None)
    
