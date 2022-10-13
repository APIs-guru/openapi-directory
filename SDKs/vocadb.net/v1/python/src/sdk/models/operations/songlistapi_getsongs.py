from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class SongListAPIGetSongsPathParams:
    list_id: int = field(default=None, metadata={'path_param': { 'field_name': 'listId', 'style': 'simple', 'explode': False }})
    
class SongListAPIGetSongsFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALBUMS = "Albums"
    ARTISTS = "Artists"
    LYRICS = "Lyrics"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    RELEASE_EVENT = "ReleaseEvent"
    TAGS = "Tags"
    THUMB_URL = "ThumbUrl"
    WEB_LINKS = "WebLinks"

class SongListAPIGetSongsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongListAPIGetSongsNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class SongListAPIGetSongsPvServicesEnum(str, Enum):
    NOTHING = "Nothing"
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"

class SongListAPIGetSongsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    PUBLISH_DATE = "PublishDate"
    FAVORITED_TIMES = "FavoritedTimes"
    RATING_SCORE = "RatingScore"
    TAG_USAGE_COUNT = "TagUsageCount"


@dataclass
class SongListAPIGetSongsQueryParams:
    advanced_filters: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'advancedFilters', 'style': 'form', 'explode': True }})
    artist_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'artistId', 'style': 'form', 'explode': True }})
    child_voicebanks: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childVoicebanks', 'style': 'form', 'explode': True }})
    fields: Optional[SongListAPIGetSongsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[SongListAPIGetSongsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongListAPIGetSongsNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    pv_services: Optional[SongListAPIGetSongsPvServicesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'pvServices', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    song_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'songTypes', 'style': 'form', 'explode': True }})
    sort: Optional[SongListAPIGetSongsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    

@dataclass
class SongListAPIGetSongsRequest:
    path_params: SongListAPIGetSongsPathParams = field(default=None)
    query_params: SongListAPIGetSongsQueryParams = field(default=None)
    

@dataclass
class SongListAPIGetSongsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_song_in_list_for_api_contract_: Optional[shared.PartialFindResultSongInListForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
