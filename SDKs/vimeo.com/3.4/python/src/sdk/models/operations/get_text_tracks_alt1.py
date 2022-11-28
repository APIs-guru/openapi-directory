from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTextTracksAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTextTracksAlt1Request:
    path_params: GetTextTracksAlt1PathParams = field()
    

@dataclass
class GetTextTracksAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    text_tracks: Optional[List[shared.TextTrack]] = field(default=None)
    
