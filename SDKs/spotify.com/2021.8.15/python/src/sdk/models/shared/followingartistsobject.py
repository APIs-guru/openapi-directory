from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cursorobject
from . import artistobject


@dataclass_json
@dataclass
class FollowingArtistsObjectArtists:
    cursors: Optional[cursorobject.CursorObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursors' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[artistobject.ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class FollowingArtistsObject:
    artists: Optional[FollowingArtistsObjectArtists] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    
