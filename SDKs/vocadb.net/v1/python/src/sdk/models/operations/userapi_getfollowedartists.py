from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UserAPIGetFollowedArtistsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetFollowedArtistsArtistTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CIRCLE = "Circle"
    LABEL = "Label"
    PRODUCER = "Producer"
    ANIMATOR = "Animator"
    ILLUSTRATOR = "Illustrator"
    LYRICIST = "Lyricist"
    VOCALOID = "Vocaloid"
    UTAU = "UTAU"
    CE_VIO = "CeVIO"
    OTHER_VOICE_SYNTHESIZER = "OtherVoiceSynthesizer"
    OTHER_VOCALIST = "OtherVocalist"
    OTHER_GROUP = "OtherGroup"
    OTHER_INDIVIDUAL = "OtherIndividual"
    UTAITE = "Utaite"
    BAND = "Band"
    VOCALIST = "Vocalist"
    CHARACTER = "Character"
    SYNTHESIZER_V = "SynthesizerV"

class UserAPIGetFollowedArtistsFieldsEnum(str, Enum):
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

class UserAPIGetFollowedArtistsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class UserAPIGetFollowedArtistsNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class UserAPIGetFollowedArtistsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    ADDITION_DATE = "AdditionDate"
    ADDITION_DATE_ASC = "AdditionDateAsc"
    RELEASE_DATE = "ReleaseDate"
    SONG_COUNT = "SongCount"
    SONG_RATING = "SongRating"
    FOLLOWER_COUNT = "FollowerCount"


@dataclass
class UserAPIGetFollowedArtistsQueryParams:
    artist_type: Optional[UserAPIGetFollowedArtistsArtistTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'artistType', 'style': 'form', 'explode': True }})
    fields: Optional[UserAPIGetFollowedArtistsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[UserAPIGetFollowedArtistsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetFollowedArtistsNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[UserAPIGetFollowedArtistsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetFollowedArtistsRequest:
    path_params: UserAPIGetFollowedArtistsPathParams = field()
    query_params: UserAPIGetFollowedArtistsQueryParams = field()
    

@dataclass
class UserAPIGetFollowedArtistsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_artist_for_user_for_api_contract_: Optional[shared.PartialFindResultArtistForUserForAPIContract] = field(default=None)
    
