from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import link
from . import link
from . import link
from . import link


@dataclass_json
@dataclass
class PlaylistLinks:
    persona: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persona' }})
    self: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    show: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show' }})
    spins: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spins' }})
    

@dataclass_json
@dataclass
class Playlist:
    links: Optional[PlaylistLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    automation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automation' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    episode_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode_description' }})
    episode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode_name' }})
    hide_dj: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_dj' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    persona_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persona_id' }})
    show_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_id' }})
    since: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'since' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
