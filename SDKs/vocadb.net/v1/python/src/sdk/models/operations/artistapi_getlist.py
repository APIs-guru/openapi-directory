from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class ArtistAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTIST_LINKS = "ArtistLinks"
    ARTIST_LINKS_REVERSE = "ArtistLinksReverse"
    BASE_VOICEBANK = "BaseVoicebank"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class ArtistAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ArtistAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class ArtistAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    ADDITION_DATE_ASC = "AdditionDateAsc"
    RELEASE_DATE = "ReleaseDate"
    SONG_COUNT = "SongCount"
    SONG_RATING = "SongRating"
    FOLLOWER_COUNT = "FollowerCount"

class ArtistAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass
class ArtistAPIGetListQueryParams:
    advanced_filters: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    allow_base_voicebanks: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowBaseVoicebanks', 'style': 'form', 'explode': True }})
    artist_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artistTypes', 'style': 'form', 'explode': True }})
    child_tags: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    fields: Optional[ArtistAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    followed_by_user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'followedByUserId', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[ArtistAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[ArtistAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    prefer_accurate_matches: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preferAccurateMatches', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[ArtistAPIGetListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[ArtistAPIGetListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    

@dataclass
class ArtistAPIGetListRequest:
    query_params: ArtistAPIGetListQueryParams = field()
    

@dataclass
class ArtistAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_artist_for_api_contract_: Optional[shared.PartialFindResultArtistForAPIContract] = field(default=None)
    
