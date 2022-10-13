from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class SongAPIGetRatingsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetRatingsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetRatingsUserFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"


@dataclass
class SongAPIGetRatingsQueryParams:
    lang: Optional[SongAPIGetRatingsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    user_fields: SongAPIGetRatingsUserFieldsEnum = field(default=None, metadata={'query_param': { 'field_name': 'userFields', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetRatingsRequest:
    path_params: SongAPIGetRatingsPathParams = field(default=None)
    query_params: SongAPIGetRatingsQueryParams = field(default=None)
    

@dataclass
class SongAPIGetRatingsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    rated_song_for_user_for_api_contracts: Optional[List[shared.RatedSongForUserForAPIContract]] = field(default=None)
    status_code: int = field(default=None)
    
