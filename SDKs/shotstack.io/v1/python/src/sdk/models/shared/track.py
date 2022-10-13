from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import clip


@dataclass_json
@dataclass
class Track:
    clips: List[clip.Clip] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clips' }})
    
