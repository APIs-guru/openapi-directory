from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SongAPIGetRatingsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    user_fields: SongAPIGetRatingsUserFieldsEnum = field(metadata={'query_param': { 'field_name': 'userFields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetRatingsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetRatingsRequest:
    path_params: SongAPIGetRatingsPathParams = field()
    query_params: SongAPIGetRatingsQueryParams = field()
    

@dataclass
class SongAPIGetRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    rated_song_for_user_for_api_contracts: Optional[List[shared.RatedSongForUserForAPIContract]] = field(default=None)
    
