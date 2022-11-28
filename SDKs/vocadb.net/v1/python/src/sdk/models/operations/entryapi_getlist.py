from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class EntryAPIGetListEntryTypesEnum(str, Enum):
    NOTHING = "Nothing"
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

class EntryAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class EntryAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class EntryAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class EntryAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    ACTIVITY_DATE = "ActivityDate"

class EntryAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass
class EntryAPIGetListQueryParams:
    child_tags: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    entry_types: Optional[EntryAPIGetListEntryTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entryTypes', 'style': 'form', 'explode': True }})
    fields: Optional[EntryAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[EntryAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[EntryAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[EntryAPIGetListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[EntryAPIGetListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    

@dataclass
class EntryAPIGetListRequest:
    query_params: EntryAPIGetListQueryParams = field()
    

@dataclass
class EntryAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_entry_for_api_contract_: Optional[shared.PartialFindResultEntryForAPIContract] = field(default=None)
    
