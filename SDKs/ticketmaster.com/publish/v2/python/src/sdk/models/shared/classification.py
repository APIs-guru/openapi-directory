from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import level
from . import segment
from . import level
from . import level
from . import level


@dataclass_json
@dataclass
class Classification:
    genre: Optional[level.Level] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genre' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    segment: Optional[segment.Segment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment' }})
    sub_genre: Optional[level.Level] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subGenre' }})
    sub_type: Optional[level.Level] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subType' }})
    type: Optional[level.Level] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
