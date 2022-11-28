from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVideoLikesAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetVideoLikesAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideoLikesAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetVideoLikesAlt1QueryParams:
    direction: Optional[GetVideoLikesAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideoLikesAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoLikesAlt1Request:
    path_params: GetVideoLikesAlt1PathParams = field()
    query_params: GetVideoLikesAlt1QueryParams = field()
    

@dataclass
class GetVideoLikesAlt1Response:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[shared.User]] = field(default=None)
    
