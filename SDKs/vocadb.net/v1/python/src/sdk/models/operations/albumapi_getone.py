from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AlbumAPIGetOnePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetOneFieldsEnum(str, Enum):
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

class AlbumAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class AlbumAPIGetOneSongFieldsEnum(str, Enum):
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


@dataclass
class AlbumAPIGetOneQueryParams:
    fields: Optional[AlbumAPIGetOneFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetOneLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    song_fields: Optional[AlbumAPIGetOneSongFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'songFields', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetOneRequest:
    path_params: AlbumAPIGetOnePathParams = field()
    query_params: AlbumAPIGetOneQueryParams = field()
    

@dataclass
class AlbumAPIGetOneResponse:
    content_type: str = field()
    status_code: int = field()
    album_for_api_contract: Optional[shared.AlbumForAPIContract] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
