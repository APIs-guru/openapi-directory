from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProjectVideosPathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetProjectVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectVideosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LAST_USER_ACTION_EVENT_DATE = "last_user_action_event_date"


@dataclass
class GetProjectVideosQueryParams:
    direction: Optional[GetProjectVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectVideosSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProjectVideosRequest:
    path_params: GetProjectVideosPathParams = field()
    query_params: GetProjectVideosQueryParams = field()
    security: GetProjectVideosSecurity = field()
    

@dataclass
class GetProjectVideosResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
