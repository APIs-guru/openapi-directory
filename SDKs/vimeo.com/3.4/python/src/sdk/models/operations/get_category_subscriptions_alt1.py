from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetCategorySubscriptionsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategorySubscriptionsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"


@dataclass
class GetCategorySubscriptionsAlt1QueryParams:
    direction: Optional[GetCategorySubscriptionsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategorySubscriptionsAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategorySubscriptionsAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCategorySubscriptionsAlt1Request:
    query_params: GetCategorySubscriptionsAlt1QueryParams = field(default=None)
    security: GetCategorySubscriptionsAlt1Security = field(default=None)
    

@dataclass
class GetCategorySubscriptionsAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    categories: Optional[List[shared.Category]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
