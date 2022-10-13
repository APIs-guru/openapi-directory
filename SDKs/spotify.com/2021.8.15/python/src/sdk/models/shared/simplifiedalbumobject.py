from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simplifiedartistobject
from . import externalurlobject
from . import imageobject
from . import albumrestrictionobject


@dataclass_json
@dataclass
class SimplifiedAlbumObject:
    album_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'album_group' }})
    album_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'album_type' }})
    artists: Optional[List[simplifiedartistobject.SimplifiedArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_markets' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date' }})
    release_date_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date_precision' }})
    restrictions: Optional[albumrestrictionobject.AlbumRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    total_tracks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tracks' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
