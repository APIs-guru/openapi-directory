from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artistobject
from . import copyrightobject
from . import externalidobject
from . import externalurlobject
from . import imageobject
from . import albumrestrictionobject
from . import simplifiedtrackobject


@dataclass_json
@dataclass
class AlbumObjectTracks:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[simplifiedtrackobject.SimplifiedTrackObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class AlbumObject:
    album_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'album_type' }})
    artists: Optional[List[artistobject.ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_markets' }})
    copyrights: Optional[List[copyrightobject.CopyrightObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyrights' }})
    external_ids: Optional[externalidobject.ExternalIDObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ids' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    popularity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'popularity' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date' }})
    release_date_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date_precision' }})
    restrictions: Optional[albumrestrictionobject.AlbumRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    total_tracks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tracks' }})
    tracks: Optional[AlbumObjectTracks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
