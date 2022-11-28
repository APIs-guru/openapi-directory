from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryThumbContractEntryTypeEnum(str, Enum):
    UNDEFINED = "Undefined"
    ALBUM = "Album"
    ARTIST = "Artist"
    DISCUSSION_TOPIC = "DiscussionTopic"
    PV = "PV"
    RELEASE_EVENT = "ReleaseEvent"
    RELEASE_EVENT_SERIES = "ReleaseEventSeries"
    SONG = "Song"
    SONG_LIST = "SongList"
    TAG = "Tag"
    USER = "User"
    VENUE = "Venue"


@dataclass_json
@dataclass
class EntryThumbContract:
    entry_type: Optional[EntryThumbContractEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryType') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
