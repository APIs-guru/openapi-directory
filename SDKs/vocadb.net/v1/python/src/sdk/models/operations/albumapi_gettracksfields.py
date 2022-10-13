from dataclasses import dataclass, field
from typing import Enum,List,Optional


@dataclass
class AlbumAPIGetTracksFieldsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetTracksFieldsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class AlbumAPIGetTracksFieldsQueryParams:
    disc_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'discNumber', 'style': 'form', 'explode': True }})
    field: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    lang: Optional[AlbumAPIGetTracksFieldsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetTracksFieldsRequest:
    path_params: AlbumAPIGetTracksFieldsPathParams = field(default=None)
    query_params: AlbumAPIGetTracksFieldsQueryParams = field(default=None)
    

@dataclass
class AlbumAPIGetTracksFieldsResponse:
    album_api_get_tracks_fields_200_application_json_objects: Optional[List[dict[str, str]]] = field(default=None)
    album_api_get_tracks_fields_200_application_jsonp_objects: Optional[List[dict[str, str]]] = field(default=None)
    album_api_get_tracks_fields_200_text_json_objects: Optional[List[dict[str, str]]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
