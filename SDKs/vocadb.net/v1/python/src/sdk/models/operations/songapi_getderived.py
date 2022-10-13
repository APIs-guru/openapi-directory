from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class SongAPIGetDerivedPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetDerivedFieldsEnum(str, Enum):
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

class SongAPIGetDerivedLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class SongAPIGetDerivedQueryParams:
    fields: Optional[SongAPIGetDerivedFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetDerivedLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetDerivedRequest:
    path_params: SongAPIGetDerivedPathParams = field(default=None)
    query_params: SongAPIGetDerivedQueryParams = field(default=None)
    

@dataclass
class SongAPIGetDerivedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    song_for_api_contracts: Optional[List[shared.SongForAPIContract]] = field(default=None)
    status_code: int = field(default=None)
    
