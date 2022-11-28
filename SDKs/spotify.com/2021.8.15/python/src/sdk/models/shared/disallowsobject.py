from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisallowsObject:
    r"""DisallowsObject

    https://developer.spotify.com/documentation/web-api/reference/#object-disallowsobject - Find more info on the official Spotify Web API Reference
    """
    
    interrupting_playback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interrupting_playback') }})
    pausing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausing') }})
    resuming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resuming') }})
    seeking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seeking') }})
    skipping_next: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipping_next') }})
    skipping_prev: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipping_prev') }})
    toggling_repeat_context: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toggling_repeat_context') }})
    toggling_repeat_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toggling_repeat_track') }})
    toggling_shuffle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toggling_shuffle') }})
    transferring_playback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferring_playback') }})
    
