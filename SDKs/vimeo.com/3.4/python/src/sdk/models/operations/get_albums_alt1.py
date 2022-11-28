from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetAlbumsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAlbumsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DURATION = "duration"
    VIDEOS = "videos"


@dataclass
class GetAlbumsAlt1QueryParams:
    direction: Optional[GetAlbumsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAlbumsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlbumsAlt1Request:
    query_params: GetAlbumsAlt1QueryParams = field()
    

@dataclass
class GetAlbumsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    albums: Optional[List[shared.Album]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
