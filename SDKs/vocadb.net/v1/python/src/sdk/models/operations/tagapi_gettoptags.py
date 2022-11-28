from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class TagAPIGetTopTagsEntryTypeEnum(str, Enum):
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

class TagAPIGetTopTagsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class TagAPIGetTopTagsQueryParams:
    category_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'categoryName', 'style': 'form', 'explode': True }})
    entry_type: Optional[TagAPIGetTopTagsEntryTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entryType', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetTopTagsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIGetTopTagsRequest:
    query_params: TagAPIGetTopTagsQueryParams = field()
    

@dataclass
class TagAPIGetTopTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag_base_contracts: Optional[List[shared.TagBaseContract]] = field(default=None)
    
