from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SongAPIGetLyricsPathParams:
    lyrics_id: int = field(default=None, metadata={'path_param': { 'field_name': 'lyricsId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIGetLyricsRequest:
    path_params: SongAPIGetLyricsPathParams = field(default=None)
    

@dataclass
class SongAPIGetLyricsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    lyrics_for_song_contract: Optional[shared.LyricsForSongContract] = field(default=None)
    status_code: int = field(default=None)
    
