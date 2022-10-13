from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAlbumVideosAlt1PathParams:
    album_id: float = field(default=None, metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    
class GetAlbumVideosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAlbumVideosAlt1FilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetAlbumVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LIKES = "likes"
    MANUAL = "manual"
    MODIFIED_TIME = "modified_time"
    PLAYS = "plays"


@dataclass
class GetAlbumVideosAlt1QueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetAlbumVideosAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetAlbumVideosAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAlbumVideosAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    weak_search: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'weak_search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumVideosAlt1Request:
    path_params: GetAlbumVideosAlt1PathParams = field(default=None)
    query_params: GetAlbumVideosAlt1QueryParams = field(default=None)
    

@dataclass
class GetAlbumVideosAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
