from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticleGetAddonsQueryParams:
    gym_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gymIds', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ArticleGetAddonsRequest:
    query_params: ArticleGetAddonsQueryParams = field()
    

@dataclass
class ArticleGetAddonsResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[shared.APIResponse] = field(default=None)
    default_response_dto_of_list_of_article_search_dto: Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto] = field(default=None)
    
