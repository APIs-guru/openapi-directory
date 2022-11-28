from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAlbumVideosPathParams:
    album_id: float = field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetAlbumVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAlbumVideosFilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetAlbumVideosSortEnum(str, Enum):
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
class GetAlbumVideosQueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetAlbumVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetAlbumVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAlbumVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    weak_search: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'weak_search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumVideosRequest:
    path_params: GetAlbumVideosPathParams = field()
    query_params: GetAlbumVideosQueryParams = field()
    

@dataclass
class GetAlbumVideosResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
