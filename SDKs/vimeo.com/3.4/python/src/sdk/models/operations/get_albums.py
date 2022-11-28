from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAlbumsPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetAlbumsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAlbumsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DURATION = "duration"
    VIDEOS = "videos"


@dataclass
class GetAlbumsQueryParams:
    direction: Optional[GetAlbumsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAlbumsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumsRequest:
    path_params: GetAlbumsPathParams = field()
    query_params: GetAlbumsQueryParams = field()
    

@dataclass
class GetAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    albums: Optional[List[shared.Album]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
