from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisallowsObject:
    interrupting_playback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interrupting_playback' }})
    pausing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pausing' }})
    resuming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resuming' }})
    seeking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seeking' }})
    skipping_next: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipping_next' }})
    skipping_prev: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipping_prev' }})
    toggling_repeat_context: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toggling_repeat_context' }})
    toggling_repeat_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toggling_repeat_track' }})
    toggling_shuffle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toggling_shuffle' }})
    transferring_playback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferring_playback' }})
    
