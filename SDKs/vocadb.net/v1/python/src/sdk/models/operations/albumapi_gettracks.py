from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AlbumAPIGetTracksPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetTracksFieldsEnum(str, Enum):
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

class AlbumAPIGetTracksLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class AlbumAPIGetTracksQueryParams:
    fields: Optional[AlbumAPIGetTracksFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetTracksLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetTracksRequest:
    path_params: AlbumAPIGetTracksPathParams = field()
    query_params: AlbumAPIGetTracksQueryParams = field()
    

@dataclass
class AlbumAPIGetTracksResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    song_in_album_for_api_contracts: Optional[List[shared.SongInAlbumForAPIContract]] = field(default=None)
    
