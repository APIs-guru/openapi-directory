from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import font
from . import soundtrack
from . import track


@dataclass_json
@dataclass
class Timeline:
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache' }})
    fonts: Optional[List[font.Font]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fonts' }})
    soundtrack: Optional[soundtrack.Soundtrack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soundtrack' }})
    tracks: List[track.Track] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    
