from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import disallowsobject
from . import contextobject
from . import deviceobject
from . import trackobject
from . import episodeobject


@dataclass_json
@dataclass
class CurrentlyPlayingContextObject:
    actions: Optional[disallowsobject.DisallowsObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    context: Optional[contextobject.ContextObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    currently_playing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currently_playing_type' }})
    device: Optional[deviceobject.DeviceObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    is_playing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_playing' }})
    item: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    progress_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress_ms' }})
    repeat_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeat_state' }})
    shuffle_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shuffle_state' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
