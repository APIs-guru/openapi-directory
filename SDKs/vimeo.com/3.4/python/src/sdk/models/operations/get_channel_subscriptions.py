from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetChannelSubscriptionsPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetChannelSubscriptionsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelSubscriptionsFilterEnum(str, Enum):
    MODERATED = "moderated"

class GetChannelSubscriptionsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    VIDEOS = "videos"


@dataclass
class GetChannelSubscriptionsQueryParams:
    direction: Optional[GetChannelSubscriptionsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetChannelSubscriptionsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelSubscriptionsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelSubscriptionsRequest:
    path_params: GetChannelSubscriptionsPathParams = field()
    query_params: GetChannelSubscriptionsQueryParams = field()
    

@dataclass
class GetChannelSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    channels: Optional[List[shared.Channel]] = field(default=None)
    
