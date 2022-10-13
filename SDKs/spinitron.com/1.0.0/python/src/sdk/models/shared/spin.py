from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import link
from . import link


@dataclass_json
@dataclass
class SpinLinks:
    playlist: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlist' }})
    self: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class Spin:
    links: Optional[SpinLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    artist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist' }})
    artist_custom: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist-custom' }})
    catalog_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog-number' }})
    classical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classical' }})
    composer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composer' }})
    conductor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conductor' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ensemble: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ensemble' }})
    genre: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genre' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    isrc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isrc' }})
    iswc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iswc' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    label_custom: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label-custom' }})
    local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local' }})
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    new: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    performers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performers' }})
    playlist_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlist_id' }})
    release: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release' }})
    release_custom: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release-custom' }})
    released: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'released' }})
    request: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    song: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'song' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    upc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upc' }})
    va: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'va' }})
    work: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'work' }})
    
