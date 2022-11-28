from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetWatchLaterQueueAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetWatchLaterQueueAlt1FilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetWatchLaterQueueAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"


@dataclass
class GetWatchLaterQueueAlt1QueryParams:
    direction: Optional[GetWatchLaterQueueAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetWatchLaterQueueAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetWatchLaterQueueAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWatchLaterQueueAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWatchLaterQueueAlt1Request:
    query_params: GetWatchLaterQueueAlt1QueryParams = field()
    security: GetWatchLaterQueueAlt1Security = field()
    

@dataclass
class GetWatchLaterQueueAlt1Response:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    
