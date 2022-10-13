from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import externalurlobject
from . import imageobject
from . import publicuserobject
from . import playlisttracksrefobject


@dataclass_json
@dataclass
class SimplifiedPlaylistObject:
    collaborative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborative' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[publicuserobject.PublicUserObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot_id' }})
    tracks: Optional[playlisttracksrefobject.PlaylistTracksRefObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
