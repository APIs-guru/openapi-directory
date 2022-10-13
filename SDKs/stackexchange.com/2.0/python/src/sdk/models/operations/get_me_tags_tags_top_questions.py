from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetMeTagsTagsTopQuestionsPathParams:
    tags: str = field(default=None, metadata={'path_param': { 'field_name': 'tags', 'style': 'simple', 'explode': False }})
    
class GetMeTagsTagsTopQuestionsOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

class GetMeTagsTagsTopQuestionsSortEnum(str, Enum):
    ACTIVITY = "activity"
    CREATION = "creation"
    VOTES = "votes"
    HOT = "hot"
    WEEK = "week"
    MONTH = "month"
    RELEVANCE = "relevance"


@dataclass
class GetMeTagsTagsTopQuestionsQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    fromdate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    order: Optional[GetMeTagsTagsTopQuestionsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    sort: Optional[GetMeTagsTagsTopQuestionsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    todate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMeTagsTagsTopQuestionsRequest:
    path_params: GetMeTagsTagsTopQuestionsPathParams = field(default=None)
    query_params: GetMeTagsTagsTopQuestionsQueryParams = field(default=None)
    

@dataclass
class GetMeTagsTagsTopQuestionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
