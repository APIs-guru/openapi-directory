from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class AlbumAPIGetTopAlbumsFieldsEnum(str, Enum):
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

class AlbumAPIGetTopAlbumsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class AlbumAPIGetTopAlbumsQueryParams:
    fields: Optional[AlbumAPIGetTopAlbumsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ignore_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'ignoreIds', 'style': 'form', 'explode': True }})
    language_preference: Optional[AlbumAPIGetTopAlbumsLanguagePreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetTopAlbumsRequest:
    query_params: AlbumAPIGetTopAlbumsQueryParams = field()
    

@dataclass
class AlbumAPIGetTopAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    album_for_api_contracts: Optional[List[shared.AlbumForAPIContract]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
