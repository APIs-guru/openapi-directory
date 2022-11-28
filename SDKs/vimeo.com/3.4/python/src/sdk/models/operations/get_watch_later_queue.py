from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetWatchLaterQueuePathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetWatchLaterQueueDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetWatchLaterQueueFilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetWatchLaterQueueSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"


@dataclass
class GetWatchLaterQueueQueryParams:
    direction: Optional[GetWatchLaterQueueDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetWatchLaterQueueFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetWatchLaterQueueSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWatchLaterQueueSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWatchLaterQueueRequest:
    path_params: GetWatchLaterQueuePathParams = field()
    query_params: GetWatchLaterQueueQueryParams = field()
    security: GetWatchLaterQueueSecurity = field()
    

@dataclass
class GetWatchLaterQueueResponse:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    
