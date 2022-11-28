from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UserAPIGetAlbumCollectionPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetAlbumCollectionAlbumTypesEnum(str, Enum):
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

class UserAPIGetAlbumCollectionFieldsEnum(str, Enum):
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

class UserAPIGetAlbumCollectionLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class UserAPIGetAlbumCollectionNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class UserAPIGetAlbumCollectionPurchaseStatusesEnum(str, Enum):
    NOTHING = "Nothing"
    WISHLISTED = "Wishlisted"
    ORDERED = "Ordered"
    OWNED = "Owned"
    ALL = "All"

class UserAPIGetAlbumCollectionSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    RELEASE_DATE = "ReleaseDate"
    RELEASE_DATE_WITH_NULLS = "ReleaseDateWithNulls"
    ADDITION_DATE = "AdditionDate"
    RATING_AVERAGE = "RatingAverage"
    RATING_TOTAL = "RatingTotal"
    NAME_THEN_RELEASE_DATE = "NameThenReleaseDate"
    COLLECTION_COUNT = "CollectionCount"


@dataclass
class UserAPIGetAlbumCollectionQueryParams:
    advanced_filters: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    album_types: Optional[UserAPIGetAlbumCollectionAlbumTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'albumTypes', 'style': 'form', 'explode': True }})
    artist_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    fields: Optional[UserAPIGetAlbumCollectionFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[UserAPIGetAlbumCollectionLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetAlbumCollectionNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    purchase_statuses: Optional[UserAPIGetAlbumCollectionPurchaseStatusesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'purchaseStatuses', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    release_event_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'releaseEventId', 'style': 'form', 'explode': True }})
    sort: Optional[UserAPIGetAlbumCollectionSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetAlbumCollectionRequest:
    path_params: UserAPIGetAlbumCollectionPathParams = field()
    query_params: UserAPIGetAlbumCollectionQueryParams = field()
    

@dataclass
class UserAPIGetAlbumCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_album_for_user_for_api_contract_: Optional[shared.PartialFindResultAlbumForUserForAPIContract] = field(default=None)
    
