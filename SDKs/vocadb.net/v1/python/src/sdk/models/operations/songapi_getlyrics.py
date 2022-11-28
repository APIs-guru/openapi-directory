from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SongAPIGetLyricsPathParams:
    lyrics_id: int = field(metadata={'path_param': { 'field_name': 'lyricsId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIGetLyricsRequest:
    path_params: SongAPIGetLyricsPathParams = field()
    

@dataclass
class SongAPIGetLyricsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    lyrics_for_song_contract: Optional[shared.LyricsForSongContract] = field(default=None)
    
