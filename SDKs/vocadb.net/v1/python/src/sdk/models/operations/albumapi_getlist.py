from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class AlbumAPIGetListArtistParticipationStatusEnum(str, Enum):
    EVERYTHING = "Everything"
    ONLY_MAIN_ALBUMS = "OnlyMainAlbums"
    ONLY_COLLABORATIONS = "OnlyCollaborations"

class AlbumAPIGetListDiscTypesEnum(str, Enum):
    UNKNOWN = "Unknown"
    ALBUM = "Album"
    SINGLE = "Single"
    EP = "EP"
    SPLIT_ALBUM = "SplitAlbum"
    COMPILATION = "Compilation"
    VIDEO = "Video"
    ARTBOOK = "Artbook"
    GAME = "Game"
    FANMADE = "Fanmade"
    INSTRUMENTAL = "Instrumental"
    OTHER = "Other"

class AlbumAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTISTS = "Artists"
    DESCRIPTION = "Description"
    DISCS = "Discs"
    IDENTIFIERS = "Identifiers"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    RELEASE_EVENT = "ReleaseEvent"
    TAGS = "Tags"
    TRACKS = "Tracks"
    WEB_LINKS = "WebLinks"

class AlbumAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class AlbumAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class AlbumAPIGetListSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    RELEASE_DATE = "ReleaseDate"
    RELEASE_DATE_WITH_NULLS = "ReleaseDateWithNulls"
    ADDITION_DATE = "AdditionDate"
    RATING_AVERAGE = "RatingAverage"
    RATING_TOTAL = "RatingTotal"
    NAME_THEN_RELEASE_DATE = "NameThenReleaseDate"
    COLLECTION_COUNT = "CollectionCount"

class AlbumAPIGetListStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass
class AlbumAPIGetListQueryParams:
    advanced_filters: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    artist_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    artist_participation_status: Optional[AlbumAPIGetListArtistParticipationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'artistParticipationStatus', 'style': 'form', 'explode': True }})
    barcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'barcode', 'style': 'form', 'explode': True }})
    child_tags: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    disc_types: Optional[AlbumAPIGetListDiscTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'discTypes', 'style': 'form', 'explode': True }})
    fields: Optional[AlbumAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    include_members: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeMembers', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[AlbumAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    prefer_accurate_matches: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preferAccurateMatches', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    release_date_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'releaseDateAfter', 'style': 'form', 'explode': True }})
    release_date_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'releaseDateBefore', 'style': 'form', 'explode': True }})
    sort: Optional[AlbumAPIGetListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    status: Optional[AlbumAPIGetListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetListRequest:
    query_params: AlbumAPIGetListQueryParams = field()
    

@dataclass
class AlbumAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_album_for_api_contract_: Optional[shared.PartialFindResultAlbumForAPIContract] = field(default=None)
    
