from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class SongAPIGetByPvFieldsEnum(str, Enum):
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

class SongAPIGetByPvLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetByPvPvServiceEnum(str, Enum):
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


@dataclass
class SongAPIGetByPvQueryParams:
    fields: Optional[SongAPIGetByPvFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetByPvLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    pv_id: str = field(default=None, metadata={'query_param': { 'field_name': 'pvId', 'style': 'form', 'explode': True }})
    pv_service: SongAPIGetByPvPvServiceEnum = field(default=None, metadata={'query_param': { 'field_name': 'pvService', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetByPvRequest:
    query_params: SongAPIGetByPvQueryParams = field(default=None)
    

@dataclass
class SongAPIGetByPvResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    song_for_api_contract: Optional[shared.SongForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
