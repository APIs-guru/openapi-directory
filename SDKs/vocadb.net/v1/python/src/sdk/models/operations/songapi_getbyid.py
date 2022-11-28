from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SongAPIGetByIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetByIDFieldsEnum(str, Enum):
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

class SongAPIGetByIDLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class SongAPIGetByIDQueryParams:
    fields: Optional[SongAPIGetByIDFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetByIDLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetByIDRequest:
    path_params: SongAPIGetByIDPathParams = field()
    query_params: SongAPIGetByIDQueryParams = field()
    

@dataclass
class SongAPIGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    song_for_api_contract: Optional[shared.SongForAPIContract] = field(default=None)
    
