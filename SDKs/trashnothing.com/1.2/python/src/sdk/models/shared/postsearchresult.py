from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import photo


@dataclass_json
@dataclass
class PostSearchResult:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiration: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    outcome: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    post_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_id' }})
    search_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_content' }})
    search_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_title' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
