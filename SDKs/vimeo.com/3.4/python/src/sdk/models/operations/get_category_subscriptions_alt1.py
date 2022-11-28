from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
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
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCategorySubscriptionsAlt1Request:
    query_params: GetCategorySubscriptionsAlt1QueryParams = field()
    security: GetCategorySubscriptionsAlt1Security = field()
    

@dataclass
class GetCategorySubscriptionsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    categories: Optional[List[shared.Category]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
