from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetCategorySubscriptionsPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetCategorySubscriptionsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategorySubscriptionsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"


@dataclass
class GetCategorySubscriptionsQueryParams:
    direction: Optional[GetCategorySubscriptionsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategorySubscriptionsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategorySubscriptionsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCategorySubscriptionsRequest:
    path_params: GetCategorySubscriptionsPathParams = field(default=None)
    query_params: GetCategorySubscriptionsQueryParams = field(default=None)
    security: GetCategorySubscriptionsSecurity = field(default=None)
    

@dataclass
class GetCategorySubscriptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    categories: Optional[List[shared.Category]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
