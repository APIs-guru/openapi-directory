from dataclasses import dataclass, field
from enum import Enum

class UserAPIPostRefreshEntryEditEntryTypeEnum(str, Enum):
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


@dataclass
class UserAPIPostRefreshEntryEditQueryParams:
    entry_id: int = field(metadata={'query_param': { 'field_name': 'entryId', 'style': 'form', 'explode': True }})
    entry_type: UserAPIPostRefreshEntryEditEntryTypeEnum = field(metadata={'query_param': { 'field_name': 'entryType', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIPostRefreshEntryEditRequest:
    query_params: UserAPIPostRefreshEntryEditQueryParams = field()
    

@dataclass
class UserAPIPostRefreshEntryEditResponse:
    content_type: str = field()
    status_code: int = field()
    
