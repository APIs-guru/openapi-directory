from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ArtistAPIGetOnePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class ArtistAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTIST_LINKS = "ArtistLinks"
    ARTIST_LINKS_REVERSE = "ArtistLinksReverse"
    BASE_VOICEBANK = "BaseVoicebank"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class ArtistAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ArtistAPIGetOneRelationsEnum(str, Enum):
    NONE = "None"
    LATEST_ALBUMS = "LatestAlbums"
    LATEST_EVENTS = "LatestEvents"
    LATEST_SONGS = "LatestSongs"
    POPULAR_ALBUMS = "PopularAlbums"
    POPULAR_SONGS = "PopularSongs"
    ALL = "All"


@dataclass
class ArtistAPIGetOneQueryParams:
    fields: Optional[ArtistAPIGetOneFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ArtistAPIGetOneLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    relations: Optional[ArtistAPIGetOneRelationsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'relations', 'style': 'form', 'explode': True }})
    

@dataclass
class ArtistAPIGetOneRequest:
    path_params: ArtistAPIGetOnePathParams = field()
    query_params: ArtistAPIGetOneQueryParams = field()
    

@dataclass
class ArtistAPIGetOneResponse:
    content_type: str = field()
    status_code: int = field()
    artist_for_api_contract: Optional[shared.ArtistForAPIContract] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
