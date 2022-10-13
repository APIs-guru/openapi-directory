from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class ActivityEntryAPIGetListEditEventEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"
    RESTORED = "Restored"

class ActivityEntryAPIGetListEntryFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class ActivityEntryAPIGetListEntryTypeEnum(str, Enum):
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

class ActivityEntryAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ARCHIVED_VERSION = "ArchivedVersion"
    ENTRY = "Entry"

class ActivityEntryAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ActivityEntryAPIGetListSortRuleEnum(str, Enum):
    CREATE_DATE_DESCENDING = "CreateDateDescending"
    CREATE_DATE = "CreateDate"


@dataclass
class ActivityEntryAPIGetListQueryParams:
    before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    edit_event: Optional[ActivityEntryAPIGetListEditEventEnum] = field(default=None, metadata={'query_param': { 'field_name': 'editEvent', 'style': 'form', 'explode': True }})
    entry_fields: Optional[ActivityEntryAPIGetListEntryFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entryFields', 'style': 'form', 'explode': True }})
    entry_type: Optional[ActivityEntryAPIGetListEntryTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entryType', 'style': 'form', 'explode': True }})
    fields: Optional[ActivityEntryAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[ActivityEntryAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort_rule: Optional[ActivityEntryAPIGetListSortRuleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortRule', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityEntryAPIGetListRequest:
    query_params: ActivityEntryAPIGetListQueryParams = field(default=None)
    

@dataclass
class ActivityEntryAPIGetListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_activity_entry_for_api_contract_: Optional[shared.PartialFindResultActivityEntryForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
