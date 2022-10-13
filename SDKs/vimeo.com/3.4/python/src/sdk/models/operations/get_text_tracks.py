from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTextTracksPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTextTracksRequest:
    path_params: GetTextTracksPathParams = field(default=None)
    

@dataclass
class GetTextTracksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    text_tracks: Optional[List[shared.TextTrack]] = field(default=None)
    
