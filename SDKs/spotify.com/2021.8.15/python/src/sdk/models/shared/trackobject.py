from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simplifiedalbumobject
from . import artistobject
from . import externalidobject
from . import externalurlobject
from . import linkedtrackobject
from . import trackrestrictionobject


@dataclass_json
@dataclass
class TrackObject:
    album: Optional[simplifiedalbumobject.SimplifiedAlbumObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'album' }})
    artists: Optional[List[artistobject.ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_markets' }})
    disc_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disc_number' }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_ms' }})
    explicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit' }})
    external_ids: Optional[externalidobject.ExternalIDObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ids' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_local' }})
    is_playable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_playable' }})
    linked_from: Optional[linkedtrackobject.LinkedTrackObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linked_from' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    popularity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'popularity' }})
    preview_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_url' }})
    restrictions: Optional[trackrestrictionobject.TrackRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    track_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track_number' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
