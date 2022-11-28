from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class ReleaseEventAPIGetListCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTISTS = "Artists"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    SERIES = "Series"
    SONG_LIST = "SongList"
    TAGS = "Tags"
    VENUE = "Venue"
    WEB_LINKS = "WebLinks"

class ReleaseEventAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ReleaseEventAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class ReleaseEventAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DATE = "Date"
    ADDITION_DATE = "AdditionDate"
    SERIES_NAME = "SeriesName"
    VENUE_NAME = "VenueName"

class ReleaseEventAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass
class ReleaseEventAPIGetListQueryParams:
    after_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    artist_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    before_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'beforeDate', 'style': 'form', 'explode': True }})
    category: Optional[ReleaseEventAPIGetListCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    child_tags: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    fields: Optional[ReleaseEventAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    include_members: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeMembers', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[ReleaseEventAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    series_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'seriesId', 'style': 'form', 'explode': True }})
    sort: Optional[ReleaseEventAPIGetListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[ReleaseEventAPIGetListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    user_collection_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userCollectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIGetListRequest:
    query_params: ReleaseEventAPIGetListQueryParams = field()
    

@dataclass
class ReleaseEventAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_release_event_for_api_contract_: Optional[shared.PartialFindResultReleaseEventForAPIContract] = field(default=None)
    
