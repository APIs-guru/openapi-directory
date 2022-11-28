from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CurrentlyPlayingObject:
    r"""CurrentlyPlayingObject

    https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject - Find more info on the official Spotify Web API Reference
    """
    
    context: Optional[ContextObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    currently_playing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currently_playing_type') }})
    is_playing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playing') }})
    item: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    progress_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress_ms') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
