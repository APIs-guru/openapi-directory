from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import photo
from . import video
from . import animatedgif
from . import poll


@dataclass_json
@dataclass
class Expansions:
    media: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    places: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'places' }})
    polls: Optional[List[poll.Poll]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polls' }})
    tweets: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tweets' }})
    users: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
