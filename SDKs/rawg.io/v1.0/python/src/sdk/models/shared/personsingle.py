from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersonSingle:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    games_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'games_count' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_background' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    rating_top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating_top' }})
    reviews_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews_count' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
