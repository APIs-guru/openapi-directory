from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticleSearchQueryParams:
    active_status: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'activeStatus', 'style': 'form', 'explode': True }})
    gym_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gymId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ArticleSearchRequest:
    query_params: ArticleSearchQueryParams = field()
    

@dataclass
class ArticleSearchResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[shared.APIResponse] = field(default=None)
    default_response_dto_of_list_of_article_search_dto: Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto] = field(default=None)
    
