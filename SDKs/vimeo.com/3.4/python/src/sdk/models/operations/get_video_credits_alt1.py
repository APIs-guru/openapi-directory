from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVideoCreditsAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetVideoCreditsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideoCreditsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetVideoCreditsAlt1QueryParams:
    direction: Optional[GetVideoCreditsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideoCreditsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoCreditsAlt1Request:
    path_params: GetVideoCreditsAlt1PathParams = field()
    query_params: GetVideoCreditsAlt1QueryParams = field()
    

@dataclass
class GetVideoCreditsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    credits: Optional[List[shared.Credit]] = field(default=None)
    
