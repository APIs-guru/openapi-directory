from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SongAPIGetRelatedPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class SongAPIGetRelatedFieldsEnum(str, Enum):
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

class SongAPIGetRelatedLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class SongAPIGetRelatedQueryParams:
    fields: Optional[SongAPIGetRelatedFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[SongAPIGetRelatedLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetRelatedRequest:
    path_params: SongAPIGetRelatedPathParams = field()
    query_params: SongAPIGetRelatedQueryParams = field()
    

@dataclass
class SongAPIGetRelatedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    related_songs_contract: Optional[shared.RelatedSongsContract] = field(default=None)
    
