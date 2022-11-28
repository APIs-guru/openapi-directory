from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class AlbumAPIGetNewAlbumsFieldsEnum(str, Enum):
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

class AlbumAPIGetNewAlbumsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class AlbumAPIGetNewAlbumsQueryParams:
    fields: Optional[AlbumAPIGetNewAlbumsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    language_preference: Optional[AlbumAPIGetNewAlbumsLanguagePreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetNewAlbumsRequest:
    query_params: AlbumAPIGetNewAlbumsQueryParams = field()
    

@dataclass
class AlbumAPIGetNewAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    album_for_api_contracts: Optional[List[shared.AlbumForAPIContract]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
