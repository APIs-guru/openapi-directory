from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Publisher:
    games_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'games_count' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_background' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
