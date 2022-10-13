from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import externalurlobject
from . import followersobject
from . import imageobject


@dataclass_json
@dataclass
class ArtistObject:
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    followers: Optional[followersobject.FollowersObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    popularity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'popularity' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
