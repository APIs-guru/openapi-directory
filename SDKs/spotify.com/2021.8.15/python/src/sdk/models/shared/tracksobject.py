from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trackobject


@dataclass_json
@dataclass
class TracksObject:
    tracks: Optional[List[trackobject.TrackObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    
