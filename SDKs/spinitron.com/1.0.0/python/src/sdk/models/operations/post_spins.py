from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostSpinsRequestBody:
    artist: str = field(metadata={'form': { 'field_name': 'artist' }})
    song: str = field(metadata={'form': { 'field_name': 'song' }})
    composer: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'composer' }})
    duration: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'duration' }})
    genre: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'genre' }})
    isrc: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'isrc' }})
    label: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'label' }})
    live: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'live' }})
    release: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'release' }})
    start: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'start' }})
    

@dataclass
class PostSpinsRequest:
    request: Optional[PostSpinsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostSpinsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    spin: Optional[shared.Spin] = field(default=None)
    validation_errors: Optional[List[shared.ValidationError]] = field(default=None)
    
