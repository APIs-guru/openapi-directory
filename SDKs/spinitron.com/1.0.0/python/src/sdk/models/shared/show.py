from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import link
from . import link


@dataclass_json
@dataclass
class ShowLinks:
    personas: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personas' }})
    playlists: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlists' }})
    self: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class Show:
    links: Optional[ShowLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hide_dj: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_dj' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    one_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one_off' }})
    since: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'since' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
