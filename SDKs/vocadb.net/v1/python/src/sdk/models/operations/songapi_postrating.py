from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SongAPIPostRatingPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIPostRatingRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    song_rating_contract: Optional[shared.SongRatingContract] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    song_rating_contract1: Optional[shared.SongRatingContract] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    song_rating_contract2: Optional[shared.SongRatingContract] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SongAPIPostRatingRequest:
    path_params: SongAPIPostRatingPathParams = field()
    request: SongAPIPostRatingRequests = field()
    

@dataclass
class SongAPIPostRatingResponse:
    content_type: str = field()
    status_code: int = field()
    
